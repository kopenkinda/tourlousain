import jwt from 'jsonwebtoken';
import querystring from 'querystring';
import { NextFunction, Request, Response } from 'express';
import { User } from 'src/models/user.entity';
import { RefreshToken } from 'src/models/token.entity';
import { HTTPError } from 'src/utils/HTTPError';
import { getJwtConfig } from 'src/configs/jwt.config';
import { logger } from 'src/utils/logger';

interface UserPayload {
  id: number;
  role: number
}

export async function saveReferer(req: Request, res: Response, next: NextFunction) {
  const url = new URL(req?.headers?.referer || '');
  const referer = `${url?.protocol}//${url.hostname}:${url.port}`;
  res.cookie('original-auth-referer', referer);
  return next();
}

export async function callback(req: Request, res: Response) {
  const jwtConfig = getJwtConfig();
  logger.log(jwtConfig);
  const reqUser = req?.user as User;
  const user = { id: reqUser.id, role: reqUser.role };
  const access = jwt.sign(user, jwtConfig.accessSecret, { expiresIn: '15s' });
  const refreshToken = jwt.sign(user, jwtConfig.refreshSecret);
  await RefreshToken.insert({ value: refreshToken });
  const referer = req?.cookies['original-auth-referer'];
  res.cookie('original-auth-referer', '', { expires: new Date(0) });
  return res.redirect(`${referer}?${querystring.stringify({ access, refresh: refreshToken })}`);
}

export async function refresh(req: Request, res: Response) {
  const jwtConfig = getJwtConfig();
  const refreshToken = await RefreshToken.findOne({ value: req.body.token });
  if (refreshToken === undefined) throw new HTTPError('Unauthorized', 401);
  jwt.verify(refreshToken.value, jwtConfig.refreshSecret, (err, userPayload: any) => {
    if (err) throw new HTTPError('Unauthorized', 401);
    const user = (userPayload as UserPayload);

    return res.json({
      token: jwt.sign({
        id: user.id,
        role: user.role,
      }, jwtConfig.accessSecret, { expiresIn: '1h' }),
    });
  });
}

export async function revoke(req: Request, res: Response) {
  const token = await (await RefreshToken.findOne({ value: req.body.token }))?.revoke();
  if (token === undefined) throw new HTTPError('Not Found', 404);
  return res.json({ ok: true });
}

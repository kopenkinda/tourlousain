import { NextFunction, Request, Response } from 'express';
import { HTTPError } from 'src/utils/HTTPError';

export function checkAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated()) {
    throw new HTTPError('Unauthorized', 401);
  }
  return next();
}

export function checkNotAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    res.redirect('/');
  }
  next();
}

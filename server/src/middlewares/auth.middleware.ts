import { NextFunction, Request, Response } from 'express';
import { logger } from 'src/utils/logger';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // TODO: Implement Authentication
  const { cookies, headers } = req;
  logger.log(cookies, headers);
  next();
};

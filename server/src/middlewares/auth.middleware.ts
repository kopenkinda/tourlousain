import { NextFunction, Request, Response } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.redirect('/auth/login');
  } else {
    next();
  }
};

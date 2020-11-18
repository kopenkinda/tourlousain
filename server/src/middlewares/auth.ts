import { NextFunction, Request, Response } from 'express';

export function checkAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
}

export function checkNotAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    res.redirect('/');
  }
  next();
}

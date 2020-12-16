import { NextFunction, Request, Response } from 'express';
import { HTTPError } from 'src/utils/HTTPError';
import { logger } from 'src/utils/logger';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new HTTPError('Not found');
  error.code = 404;
  next(error);
};

export const errorHandler = (err: HTTPError, req: Request, res: Response, next: NextFunction) => {
  const error = {
    code: err.code || 500,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV !== 'production' ? err.stack : '',
  };
  logger.error(error);
  res.status(error.code).json(error);
  next();
};

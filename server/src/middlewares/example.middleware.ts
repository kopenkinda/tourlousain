import { NextFunction, Request, Response } from 'express';
import { sleep } from '../utils/sleep';

export const exampleMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-next-line no-console
  console.log('Such wow, le middleware');
  await sleep(1000);
  next();
};

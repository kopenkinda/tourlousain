import { NextFunction, Request, Response } from 'express';
import { sleep } from '../utils/sleep';

export const exampleMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  console.log('Such wow, le middleware');
  await sleep(1000);
  next();
};

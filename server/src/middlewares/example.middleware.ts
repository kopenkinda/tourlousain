import { NextFunction, Request, Response } from 'express';
import { logger } from 'src/utils/logger';
import { sleep } from '../utils/sleep';

export const exampleMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  logger.alert('Example middleware');
  await sleep(1000);
  next();
};

import type { Request, Response, NextFunction } from 'express';

export default interface IRoute {
  prefix: string | (() => string),
  method: 'GET' | 'PATCH' | 'POST' | 'DELETE',
  handler: (req: Request, res: Response, next?: NextFunction) => void,
}

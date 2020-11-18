import { Request, Response } from 'express';

export async function index(req: Request, res: Response): Promise<Response<any>> {
  return res.json({
    error: false,
    data: '🌟',
  });
}

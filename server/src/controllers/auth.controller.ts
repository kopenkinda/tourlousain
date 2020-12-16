import { Request, Response } from 'express';
import path from 'path';

export async function login(req: Request, res: Response): Promise<void> {
  return res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
}

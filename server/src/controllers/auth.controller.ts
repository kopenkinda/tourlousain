import { Request, Response } from 'express';

export async function index(req: Request, res: Response): Promise<Response<any>> {
  return res.json({
    error: false,
    data: '🌟',
  });
}

export async function logout(req: Request, res: Response) {
  req.logout();
  res.redirect('/');
}

export async function googleRedirect(req: Request, res: Response) {
  res.redirect('/profile');
}

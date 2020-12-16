import express from 'express';
import passport from 'passport';
import { googleRedirect, index, logout } from '../controllers/auth.controller';

export const authRouter = express.Router();

authRouter.get('/', index);

authRouter.get('/logout', logout);

authRouter.get('/google', passport.authenticate('google', {
  scope: ['profile'],
}));

authRouter.get('/google/redirect', passport.authenticate('google'), googleRedirect);

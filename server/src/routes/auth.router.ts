import express from 'express';
import passport from 'passport';
import * as controller from '../controllers/auth.controller';

export const authRouter = express.Router();

authRouter.get('/logout', controller.revoke);

authRouter.get(
  '/google',
  controller.saveReferer,
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  }),
);

authRouter.get(
  '/google/redirect',
  passport.authenticate('google', { session: false }),
  controller.callback,
);

authRouter.post(
  '/refresh',
  controller.refresh,
);

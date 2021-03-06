import express from 'express';
import passport from 'passport';
import session from 'express-session';
import path from 'path';
import { passportInit } from './auth/passport-setup';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware';
import { apiRouter } from './routes/api.router';
import { authRouter } from './routes/auth.router';

export function serverInit() {
  const app = express();
  app.use(express.static(path.join(__dirname, 'public')));

  // ? app use
  app.use(
    session({ secret: process.env.SESSION_SECRET!, resave: false, saveUninitialized: false }),
  );

  // ? Setup passport
  app.use(passport.initialize());
  passportInit();
  app.use(passport.session());

  // ? Setup routers
  app.use('/api', apiRouter);
  app.use('/auth', authRouter);

  // ? Setup error handling
  app.use(notFoundHandler);
  app.use(errorHandler);
  return app;
}

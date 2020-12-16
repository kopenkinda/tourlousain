import express from 'express';
import path from 'path';
import flash from 'express-flash';
import session from 'express-session';
import passport from 'passport';
import { exampleMiddleware } from './middlewares/example.middleware';
import { apiRouter } from './routes/api.router';
import { authRouter } from './routes/auth.router';
import { initializePassport } from './configs/passport.config';

export function serverInit() {
  const app = express();
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(exampleMiddleware);
  app.get('/', (req, res) => res.json({ error: true, status: 404 }));
  app.use('/api', apiRouter);

  // permet d'avoir accès aux formulaire depuis les variables Request
  // au lieu d'y avoir accès depuis les méthodes POST
  app.use(express.urlencoded({ extended: false }));

  app.use(flash());

  // voir .env et modifier la variable en une string de caractères aléatoires par sécurité
  app.use(
    session({ secret: process.env.SESSION_SECRET!, resave: false, saveUninitialized: false }),
  );
  initializePassport();
  app.use(passport.initialize());
  app.use(passport.session());

  // routes des pages d'authentification
  app.use(authRouter);
  return app;
}

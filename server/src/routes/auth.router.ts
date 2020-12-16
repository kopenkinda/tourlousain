import express from 'express';
import path from 'path';
import passport from 'passport';
import { logger } from '../utils/logger';

export const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

authRouter.get('/register', passport.authenticate('google', { scope: ['profile'] }), (req, res) => {
  logger.info('Bonjour ', req, res);
  res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});

authRouter.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

authRouter.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    logger.info('Bonjour', req, res);
    res.redirect('/register');
  });

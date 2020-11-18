import express from 'express';
import path from 'path';
import bcrypt from 'bcrypt';
import passport from 'passport';
import * as auth from '../middlewares/auth';
import initializePassport from '../configs/passport-config';

// les utilisateurs seront stockés dans une variable locale pour l'instant
// à enlever
const users:any[] = [];

// appel de la fonction dans passport-config.ts avec le passport à configurer
// et l'utilisateur trouvé dans notre tableau
initializePassport(
  passport,
  (email:any) => users.find((user) => user.email === email),
  (id:any) => users.find((user) => user.id === id),
);

export const authRouter = express.Router();

authRouter.get('/login', auth.checkAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

authRouter.post('login', passport.authenticate('local', {
  // redirection en cas de succès
  successRedirect: '/api',
  // redirection en cas d'échec
  failureRedirect: '/login',
  // permet d'envoyer un message avec express-flash sur la page
  failureMessage: true,
}));

authRouter.get('/register', auth.checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});

authRouter.post('/register', auth.checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.pwd, 10);
    users.push({
    // pour l'instant l'id sera le moment où l'utilisateur est créé
      id: Date.now().toString(),
      email: req.body.email,
      pwd: hashedPassword,
    });
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
});

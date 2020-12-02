/* eslint-disable indent */
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../models/user.entity';

passport.serializeUser((user: any, done: any) => {
  done(null, user.id);
});

passport.deserializeUser((id: any, profile: any, done: any) => {
  // Ici on va utiliser les infos contenues dans profile (genre profile.id)
  // pour vérifier si l'utilisateur est dans la bdd
  User.findOne(id)
  .then((user) => {
    done(user);
  });
});

// modifier callbackURL à l'avenir
passport.use(new GoogleStrategy({
    clientID: '700601288506-q47f060f8q98m7jraslg40qv0ggv7v59.apps.googleusercontent.com',
    clientSecret: 'GWVm-SBdUny79dV9STni8fzy',
    callbackURL: 'http://localhost:8080/auth/google/callback',
  },
  (accessToken: any, refreshToken: any, profile: any, cb: any) => {
    const userToFind = {
      _id: profile.id,
      email: profile.email,
      password: profile.password,
    };
    User.findOne(userToFind)
    .then(async (user) => {
      let newUser = user;
      if (!user) {
        newUser = User.create(userToFind);
      }
      cb(newUser);
    });
  }));

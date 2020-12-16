import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { logger } from '../utils/logger';
import { User } from '../models/user.entity';
import { getOAuthConfig } from './strategies/oauth.config';

export function initializePassport() {
  passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
  });

  passport.deserializeUser((id: any, profile: any, done: any) => {
    // Ici on va utiliser les infos contenues dans profile (genre profile.id)
    // pour vérifier si l'utilisateur est dans la bdd
    User.findOne(id)
      .then((user) => {
        logger.info('A', user);
        done(user);
      });
  });

  passport.use(new GoogleStrategy(
    getOAuthConfig(),
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
            newUser = await User.create(userToFind);
          }
          logger.info('B', user, userToFind);
          cb(' ', newUser);
        });
    },
  ));
}

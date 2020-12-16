import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { getGoogleOAuthConfig } from 'src/configs/google-oauth.config';
import { User } from 'src/models/user.entity';
import { logger } from 'src/utils/logger';

export function passportInit() {
  // ? Setup Google OAuth 2.0 Strategy
  passport.use(new GoogleStrategy(
    getGoogleOAuthConfig(),
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.find({ googleID: profile.id });
      if (user.length > 0) {
        // ? User found
        done('', user[0]);
      } else {
        // ?  Creating user
        const newUser = new User();
        const { id, emails } = profile;
        // throw profile;
        logger.log({ profile });

        newUser.googleID = id;
        newUser.email = emails ? emails[0].value : 'unknown@email.com';
        newUser.password = 'unset';
        newUser.save()
          .then((newlyCreatedUser) => {
            logger.log({ newlyCreatedUser });
            done('', newlyCreatedUser);
          });
      }
    },
  ));

  // ? Serialize user
  passport.serializeUser((user: User, done) => {
    done(null, user.id);
  });
  // ? De-serialize user
  passport.deserializeUser((id: string, done) => {
    User.findOne(id)
      .then((found) => {
        logger.log({ found });
        done(null, found);
      });
  });
}

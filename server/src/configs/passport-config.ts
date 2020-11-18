import bcrypt from 'bcrypt';
import { PassportStatic } from 'passport';

const LocalStrategy = require('passport-local');

export default function initialize(
  passport:PassportStatic,
  getUserByEmail:any,
  getUserById:any,
) {
  const authenticateUser = async (email :string, pwd:string, done: any) => {
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: "Pas d'utilisateur trouvé" });
    }

    try {
      if (await bcrypt.compare(pwd, user.pwd)) {
        return done(null, user);
      }
      return done(null, false, { message: "Pas d'utilisateur trouvé" });
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    done(null, getUserById(id));
  });
}

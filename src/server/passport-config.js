import passport from "passport";
import facebookStrategy from "./facebook.strategy";

export default app => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  facebookStrategy();
};

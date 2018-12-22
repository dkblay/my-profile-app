import passport from "passport";
import strategy from "passport-facebook";

const Facebookstrategy = strategy.Strategy;

export default () => {
  passport.use(
    new Facebookstrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: `${process.env.APP_DOMAIN}/auth/facebook/callback`,
        passReqToCallback: true
      },
      async (req, accessToken, refreshToken, profile, done) => {
        const user = {};

        user.displayName = profile.displayName;
        user.facebook = {};
        user.token = accessToken;

        done(null, user);
      }
    )
  );
};

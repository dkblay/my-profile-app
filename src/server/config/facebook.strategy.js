import passport from "passport";
import strategy from "passport-facebook";

const Facebookstrategy = strategy.Strategy;

export default () => {
  passport.use(
    new Facebookstrategy(
      {
        clientID: "1438421969807164",
        clientSecret: "63b04c2fc7eeca2241070aa3428aa96f",
        callbackURL: "http://localhost:3000/auth/facebook/callback",
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

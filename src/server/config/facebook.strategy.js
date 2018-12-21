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

        // user.email = profile.emails[0].value;
        // //user.image = profile._json.image.url;
        // user.displayName = profile.displayName;

        user.facebook = {};
        // user.facebook.id = profile.id;
        user.token = accessToken;

        done(null, user);
      }
    )
  );
};

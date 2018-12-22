import express from "express";
import passport from "passport";

const router = express.Router();

router.route("/facebook").get(
  passport.authenticate("facebook", {
    scope: ["email", "user_posts", "user_photos", "user_friends"]
  })
);
router.route("/facebook/callback").get(
  passport.authenticate("facebook", {
    successRedirect: "/profile",
    failureRedirect: "/error"
  })
);
export default router;

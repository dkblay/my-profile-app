import express from "express";

const router = express.Router();

router.route("/feed").get((req, res) => {
  return res.json({ foo: "foo" });
});

export default router;

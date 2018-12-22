import express from "express";
import { getUserFeed } from "../../shared/api";
const router = express.Router();

router.route("/feed").get(async (req, res) => {
  const feed = await getUserFeed(req.user.token);
  return res.json(feed);
});

export default router;

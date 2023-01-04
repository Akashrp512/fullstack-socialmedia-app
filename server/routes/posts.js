import express from "express";
import { verify } from "jsonwebtoken";
import {getFeedPosts, getUserPosts, likePost} from "../controllers/post.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

/* READ*/
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);


/*UPDATE */
router.get("/:id/like", verifyToken, likePost);

export default router;


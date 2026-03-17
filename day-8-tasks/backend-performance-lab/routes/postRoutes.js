import express from "express";
import {
	getPostsWithCommentsBad,
	getPostsWithCommentsOptimized,
} from "../controllers/postController";

const router = express.Router();

router.get("/posts-bad", getPostsWithCommentsBad);
router.get("/posts-optimized", getPostsWithCommentsOptimized);

export { router };

import { find } from "../models/Post";
import { find as _find } from "../models/Comment";

export async function getPostsWithCommentsBad(req, res) {
	try {
		const posts = await find();

		for (let post of posts) {
			const comments = await _find({ postId: post._id });
			post.comments = comments;
		}

		res.json(posts);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export async function getPostsWithCommentsOptimized(req, res) {
	try {
		const posts = await Post.aggregate([
			{
				$lookup: {
					from: "comments",
					localField: "_id",
					foreignField: "postId",
					as: "comments",
				},
			},
		]);

		res.json(posts);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
	postId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Post",
	},
	text: String,
});

module.exports = mongoose.model("Comment", commentSchema);

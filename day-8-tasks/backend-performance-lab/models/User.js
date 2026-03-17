import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		index: true,
	},
	username: {
		type: String,
		required: true,
		index: true,
	},
});

export default mongoose.model("User", userSchema);

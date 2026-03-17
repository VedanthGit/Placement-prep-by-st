import User from "../models/User";

export async function testIndexPerformance(req, res) {
	try {
		console.time("QueryTime");

		const user = await User.findOne({ email: req.query.email });

		console.timeEnd("QueryTime");

		res.json(user);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

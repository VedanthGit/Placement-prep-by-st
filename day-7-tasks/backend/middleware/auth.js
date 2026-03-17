import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({
			success: false,
			message: "No token provided",
		});
	}

	const token = authHeader.split(" ")[1];

	try {
		const decoded = jwt.verify(token, "SECRET_KEY");

		req.user = decoded;

		next();
	} catch {
		return res.status(401).json({
			success: false,
			message: "Invalid or expired token",
		});
	}
};

export default authMiddleware;

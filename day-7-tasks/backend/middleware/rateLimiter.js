const requestMap = new Map();

const rateLimiter = (req, res, next) => {
	const ip = req.ip;

	const currentTime = Date.now();
	const windowTime = 60 * 1000; // 1 minute
	const maxRequests = 5;

	if (!requestMap.has(ip)) {
		requestMap.set(ip, []);
	}

	const timestamps = requestMap
		.get(ip)
		.filter((time) => currentTime - time < windowTime);

	timestamps.push(currentTime);

	requestMap.set(ip, timestamps);

	if (timestamps.length > maxRequests) {
		return res.status(429).json({
			success: false,
			message: "Too many requests. Try again later.",
		});
	}

	next();
};

export default rateLimiter;

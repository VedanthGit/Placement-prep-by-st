import { countDocuments, find } from "../models/Product";
import { get, setEx } from "../config/redis";

// Pagination API
export async function getProducts(req, res) {
	try {
		let { page = 1, limit = 10 } = req.query;

		page = parseInt(page);
		limit = parseInt(limit);

		const skip = (page - 1) * limit;

		const total = await countDocuments();

		const products = await find().skip(skip).limit(limit).lean();

		res.json({
			page,
			totalPages: Math.ceil(total / limit),
			totalItems: total,
			data: products,
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

// Redis Cache API
export async function getPopularProducts(req, res) {
	try {
		const cacheKey = "popular_products";

		const cached = await get(cacheKey);

		if (cached) {
			return res.json({
				source: "cache",
				data: JSON.parse(cached),
			});
		}

		const products = await find({ isPopular: true }).lean();

		await setEx(cacheKey, 60, JSON.stringify(products));

		res.json({
			source: "database",
			data: products,
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

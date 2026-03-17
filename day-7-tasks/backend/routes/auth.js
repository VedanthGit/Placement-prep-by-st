import express from "express";
import jwt from "jsonwebtoken";
import { validateSignup } from "../utils/validators.js";

const router = express.Router();

let users = [];

router.post("/signup", (req, res, next) => {
	try {
		const { email, password } = req.body;

		const errors = validateSignup({ email, password });

		if (errors.length > 0) {
			return res.status(400).json({
				success: false,
				errors,
			});
		}

		const newUser = {
			id: Date.now(),
			email,
			password,
		};

		users.push(newUser);

		res.status(201).json({
			success: true,
			message: "User created",
		});
	} catch (err) {
		next(err);
	}
});

router.post("/login", (req, res) => {
	const token = jwt.sign({ user: "admin" }, "SECRET_KEY", { expiresIn: "1h" });

	res.json({ token });
});

export default router;

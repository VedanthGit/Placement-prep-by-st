import express from "express";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

let users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
];

router.get("/", authMiddleware, (req, res) => {
	res.json(users);
});

router.post("/", authMiddleware, (req, res) => {
	if (!req.body.name) {
		return res.status(400).json({ message: "Name required" });
	}

	const user = {
		id: Date.now(),
		name: req.body.name,
	};

	users.push(user);
	res.status(201).json(user);
});

router.patch("/:id", authMiddleware, (req, res) => {
	users = users.map((u) =>
		u.id == req.params.id ? { ...u, name: req.body.name } : u,
	);

	res.json({ message: "Updated" });
});

router.delete("/:id", authMiddleware, (req, res) => {
	users = users.filter((u) => u.id != req.params.id);
	res.json({ message: "Deleted" });
});

export default router;

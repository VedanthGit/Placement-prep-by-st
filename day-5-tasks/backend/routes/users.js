import express from "express";

const router = express.Router();

let users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
];

router.get("/", (req, res) => {
	res.json(users);
});

router.post("/", (req, res) => {
	const user = { id: Date.now(), name: req.body.name };
	users.push(user);
	res.json(user);
});

router.patch("/:id", (req, res) => {
	users = users.map((u) =>
		u.id == req.params.id ? { ...u, name: req.body.name } : u,
	);
	res.json({ message: "updated" });
});

router.delete("/:id", (req, res) => {
	users = users.filter((u) => u.id != req.params.id);
	res.json({ message: "Deleted" });
});

export default router;

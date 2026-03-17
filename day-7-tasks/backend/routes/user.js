import express from "express";
import authMiddleware from "../middleware/auth";

const router = express.Router();

let users = [{ id: 1, name: "Alice" }];

router.get("/", authMiddleware, (req, res) => {
	res.json(users);
});

export default router;

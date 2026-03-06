import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import router from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/users", router);

app.post("/login", (req, res) => {
	const token = jwt.sign({ user: "admin" }, "SECRET_KEY", { expiresIn: "1h" });

	res.json({ token });
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});

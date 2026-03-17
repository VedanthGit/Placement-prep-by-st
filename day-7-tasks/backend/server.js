import express from "express";
import cors from "cors";

import usersRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";

import rateLimiter from "./middleware/rateLimiter.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoute);

// Apply rate limiter ONLY to login
app.use("/auth/login", rateLimiter);

app.use("/users", usersRoute);

// Error Middleware (last)
app.use(errorHandler);

app.listen(5000, () => {
	console.log("Server running on port 5000");
});

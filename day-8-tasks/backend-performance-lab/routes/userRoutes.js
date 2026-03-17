import express from "express";
import { testIndexPerformance } from "../controllers/userController";
const router = express.Router();

router.get("/test-index", testIndexPerformance);

export { router };

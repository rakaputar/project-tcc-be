import express from "express";
import { compareSmartphones } from "../controllers/compareController.js";

const router = express.Router();

router.get("/", compareSmartphones);

export default router;

import express from "express";
import {
  getBrands,
  createBrand,
  deleteBrand,
} from "../controllers/brandController.js";

import { authenticateToken } from "../middlewares/authMiddleware.js";
import validateAccessCode from "../middlewares/validateAccessCode.js";

const router = express.Router();

router.get("/", getBrands);
router.post("/", authenticateToken, validateAccessCode, createBrand);
router.delete("/:id", authenticateToken, validateAccessCode, deleteBrand);

export default router;

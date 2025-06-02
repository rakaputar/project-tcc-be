import express from "express";
import {
  getAllSmartphones,
  getSmartphoneById,
  createSmartphone,
  updateSmartphone,
  deleteSmartphone,
} from "../controllers/smartphoneController.js";

import { authenticateToken } from "../middlewares/authMiddleware.js";
import validateAccessCode from "../middlewares/validateAccessCode.js";

const router = express.Router();

router.get("/", getAllSmartphones);
router.get("/:id", getSmartphoneById);

router.post("/", authenticateToken, validateAccessCode, createSmartphone);
router.put("/:id", authenticateToken, validateAccessCode, updateSmartphone);
router.delete("/:id", authenticateToken, validateAccessCode, deleteSmartphone);

export default router;

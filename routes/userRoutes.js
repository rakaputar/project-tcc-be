import express from "express";
import { getProfile, updateProfile } from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";
import { verifyPassword } from "../controllers/userController.js";

const router = express.Router();

router.get("/me", authenticateToken, getProfile);
router.put("/me", authenticateToken, updateProfile);
router.post("/verify-password", authenticateToken, verifyPassword);

export default router;

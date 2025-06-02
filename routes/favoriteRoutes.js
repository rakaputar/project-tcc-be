import express from "express";
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from "../controllers/favoriteController.js";

import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/:smartphoneId", authenticateToken, addFavorite);
router.get("/", authenticateToken, getFavorites);
router.delete("/:smartphoneId", authenticateToken, removeFavorite);

export default router;

import express from "express";
import dotenv from "dotenv";
import connectToDB from "./models/index.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import smartphoneRoutes from "./routes/smartphoneRoutes.js";
import brandRoutes from "./routes/brandRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";
import compareRoutes from "./routes/compareRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/smartphones", smartphoneRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/smartphones/compare", compareRoutes);
app.use("/api/users", userRoutes);

// Route test
app.get("/", (req, res) => {
  res.send("API Smartphone Catalog");
});

// Start app
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await connectToDB();
});


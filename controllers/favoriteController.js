import { User, Smartphone } from "../models/index.js";

export const addFavorite = async (req, res) => {
  const userId = req.user.id;
  const { smartphoneId } = req.params;
  try {
    const user = await User.findByPk(userId);
    const phone = await Smartphone.findByPk(smartphoneId);
    if (!user || !phone) return res.status(404).json({ error: "User or smartphone not found" });

    await user.addFavorite(phone);
    res.status(201).json({ message: "Added to favorites" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add favorite" });
  }
};

export const getFavorites = async (req, res) => {
  console.log("Authenticated user ID:", req.user.id);
  const userId = req.user.id;
  try {
    const user = await User.findByPk(userId, {
      include: [{ model: Smartphone, as: "favorites", include: ["brand"] }],
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user.favorites);
  } catch (err) {
    console.error("getFavorites error:", err);
    res.status(500).json({ error: "Failed to fetch favorites" });
  }
};


export const removeFavorite = async (req, res) => {
  const userId = req.user.id;
  const { smartphoneId } = req.params;
  try {
    const user = await User.findByPk(userId);
    const phone = await Smartphone.findByPk(smartphoneId);
    if (!user || !phone) return res.status(404).json({ error: "User or smartphone not found" });

    await user.removeFavorite(phone);
    res.json({ message: "Removed from favorites" });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove favorite" });
  }
};

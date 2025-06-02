import { User } from "../models/index.js";
import bcrypt from "bcrypt";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ["id", "username", "createdAt"],
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch profile" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    if (username) user.username = username;

    if (password) {
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();

    res.json({
      message: "Profile updated successfully",
      user: {
        id: user.id,
        username: user.username,
        updatedAt: user.updatedAt,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to update profile" });
  }
};

export const verifyPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const user = await User.findByPk(req.user.id);

    if (!user) return res.status(404).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid password" });

    res.json({ message: "Password verified" });
  } catch (err) {
    res.status(500).json({ error: "Failed to verify password" });
  }
};
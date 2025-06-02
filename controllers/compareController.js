import { Smartphone, Brand } from "../models/index.js";

export const compareSmartphones = async (req, res) => {
  const ids = req.query.ids?.split(",") || [];

  if (ids.length < 2) {
    return res.status(400).json({ error: "Provide at least two smartphone IDs" });
  }

  try {
    const smartphones = await Smartphone.findAll({
      where: { id: ids },
      include: [{ model: Brand, attributes: ["name"] }],
    });

    if (smartphones.length < 2) {
      return res.status(404).json({ error: "Not all smartphones found" });
    }

    res.json(smartphones);
  } catch (err) {
    res.status(500).json({ error: "Comparison failed" });
  }
};

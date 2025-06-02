import { Smartphone, Brand } from "../models/index.js";

export const getAllSmartphones = async (req, res) => {
  try {
    const smartphones = await Smartphone.findAll({
      include: {
        model: Brand,
        as: "brand",
        attributes: ["id", "name"],
      },
    });
    res.json(smartphones);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch smartphones" });
  }
};

export const getSmartphoneById = async (req, res) => {
  try {
    const phone = await Smartphone.findByPk(req.params.id, {
      include: {
        model: Brand,
        as: "brand",
        attributes: ["id", "name"],
      },
    });
    if (!phone) return res.status(404).json({ error: "Smartphone not found" });
    res.json(phone);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch smartphone" });
  }
};

export const createSmartphone = async (req, res) => {
  try {
    const { name, image, price, processor, memory, battery, brandId } = req.body;

    if (!name || !price || !processor || !memory || !battery || !brandId) {
      return res.status(400).json({ error: "Please fill all required fields" });
    }

    const phone = await Smartphone.create({
      name,
      image,
      price,
      processor,
      memory,
      battery,
      brandId,
    });

    res.status(201).json(phone);
  } catch (err) {
    console.error("Create Smartphone Error:", err); // 👈 log detail
    res.status(400).json({ error: "Failed to create smartphone", detail: err.message });
  }
};



export const updateSmartphone = async (req, res) => {
  try {
    const phone = await Smartphone.findByPk(req.params.id);
    if (!phone) return res.status(404).json({ error: "Smartphone not found" });

    await phone.update(req.body);
    res.json(phone);
  } catch (err) {
    res.status(400).json({ error: "Failed to update smartphone" });
  }
};

export const deleteSmartphone = async (req, res) => {
  try {
    const phone = await Smartphone.findByPk(req.params.id);
    if (!phone) return res.status(404).json({ error: "Smartphone not found" });

    await phone.destroy();
    res.json({ message: "Smartphone deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete smartphone" });
  }
};

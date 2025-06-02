import { Brand } from "../models/index.js";

export const getBrands = async (req, res) => {
  try {
    const brands = await Brand.findAll();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch brands" });
  }
};

export const createBrand = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    const brand = await Brand.create({ name, imageUrl });
    res.status(201).json(brand);
  } catch (err) {
    res.status(400).json({ error: "Failed to create brand" });
  }
};

export const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findByPk(req.params.id);
    if (!brand) return res.status(404).json({ error: "Not found" });

    await brand.destroy();
    res.json({ message: "Brand deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete brand" });
  }
};

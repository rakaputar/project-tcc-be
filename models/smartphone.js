import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Smartphone = sequelize.define("Smartphone", {
  name: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: true },
  price: { type: DataTypes.INTEGER, allowNull: false },
  processor: { type: DataTypes.STRING, allowNull: false },
  memory: { type: DataTypes.STRING, allowNull: false },
  battery: { type: DataTypes.STRING, allowNull: false },
  brandId: { type: DataTypes.INTEGER, allowNull: false },
});

export default Smartphone;

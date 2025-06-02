import sequelize from "../config/db.js";
import User from "./user.js";
import Smartphone from "./smartphone.js";
import Brand from "./brand.js";
import Favorite from "./favorite.js";
import "./associations.js";


const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
    await sequelize.sync(); // gunakan { force: true } jika perlu reset
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

export { User, Smartphone, Brand, Favorite };
export default connectToDB;

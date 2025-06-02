import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./user.js";
import Smartphone from "./smartphone.js";

const Favorite = sequelize.define("Favorite", {});

export default Favorite;

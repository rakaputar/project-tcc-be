import Brand from "./brand.js";
import Smartphone from "./smartphone.js";
import User from "./user.js";
import Favorite from "./favorite.js";

// Relasi Smartphone - Brand
Smartphone.belongsTo(Brand, { foreignKey: "brandId", as: "brand" });
Brand.hasMany(Smartphone, { foreignKey: "brandId", as: "smartphones" });

// Relasi User - Favorite - Smartphone
User.belongsToMany(Smartphone, { through: Favorite, as: "favorites" });
Smartphone.belongsToMany(User, { through: Favorite, as: "favoritedBy" });


export {
  Brand,
  Smartphone,
  User,
  Favorite
};

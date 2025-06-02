import dotenv from "dotenv";
import { User, Brand, Smartphone, Favorite } from "./models/index.js";
import bcrypt from "bcrypt";
import sequelize from "./config/db.js";

dotenv.config();

const seed = async () => {
  try {
    await sequelize.sync({ force: true }); // Reset DB

    // Seed users
    const passwordHash = await bcrypt.hash("123", 10);
    const user1 = await User.create({ username: "user1", password: passwordHash });
    const user2 = await User.create({ username: "user2", password: passwordHash });

    // Seed brands
    const brandSamsung = await Brand.create({ 
      name: "Samsung", 
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png"
    });
    const brandApple = await Brand.create({ 
      name: "Apple",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
    });
    const brandXiaomi = await Brand.create({ 
      name: "Xiaomi",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/768px-Xiaomi_logo.svg.png"  
    });
    const brandOppo = await Brand.create({ 
      name: "Oppo",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/OPPO_LOGO_2019.svg/2560px-OPPO_LOGO_2019.svg.png"  
    });
    const brandRealme = await Brand.create({ 
      name: "Realme",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Realme-realme-_logo_box-RGB-01.svg/2560px-Realme-realme-_logo_box-RGB-01.svg.png" 
    });

    // Seed smartphones with brandId
    const smartphones = await Smartphone.bulkCreate([
      {
        name: "Galaxy S22",
        brandId: brandSamsung.id,
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-5g-2.jpg",
        price: 12000000,
        processor: "Exynos 2200",
        memory: "8GB/128GB",
        battery: "3700mAh",
      },
      {
        name: "iPhone 14",
        brandId: brandApple.id,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-3.jpg",
        price: 15000000,
        processor: "A15 Bionic",
        memory: "6GB/128GB",
        battery: "3279mAh",
      },
      {
        name: "Xiaomi 12",
        brandId: brandXiaomi.id,
        image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-12-1.jpg",
        price: 9000000,
        processor: "Snapdragon 8 Gen 1",
        memory: "8GB/256GB",
        battery: "4500mAh",
      },
      {
        name: "Oppo Find X5",
        brandId: brandOppo.id,
        image: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x5-1.jpg",
        price: 10000000,
        processor: "Snapdragon 888",
        memory: "8GB/256GB",
        battery: "4800mAh",
      },
      {
        name: "Realme GT Neo 3",
        brandId: brandRealme.id,
        image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-gt-neo3-0.jpg",
        price: 6500000,
        processor: "Dimensity 8100",
        memory: "8GB/128GB",
        battery: "5000mAh",
      },
      {
        name: "Galaxy A73",
        brandId: brandSamsung.id,
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a73-5g-1.jpg",
        price: 6000000,
        processor: "Snapdragon 778G",
        memory: "8GB/256GB",
        battery: "5000mAh",
      },
      {
        name: "iPhone SE (2022)",
        brandId: brandApple.id,
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-se-2022-0.jpg",
        price: 8000000,
        processor: "A15 Bionic",
        memory: "4GB/64GB",
        battery: "2018mAh",
      },
      {
        name: "Xiaomi Redmi Note 11",
        brandId: brandXiaomi.id,
        image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-11-global-1.jpg",
        price: 3000000,
        processor: "Snapdragon 680",
        memory: "6GB/128GB",
        battery: "5000mAh",
      },
      {
        name: "Oppo Reno7",
        brandId: brandOppo.id,
        image: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno7-4g-1.jpg",
        price: 5500000,
        processor: "Snapdragon 680",
        memory: "8GB/128GB",
        battery: "4500mAh",
      },
      {
        name: "Realme Narzo 50",
        brandId: brandRealme.id,
        image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-narzo-50-1.jpg",
        price: 2500000,
        processor: "Helio G96",
        memory: "6GB/128GB",
        battery: "5000mAh",
      },
    ]);

    // Set some favorites
    await user1.addFavorite(smartphones[0]); // Galaxy S22
    await user1.addFavorite(smartphones[2]); // Xiaomi 12
    await user2.addFavorite(smartphones[1]); // iPhone 14
    await user2.addFavorite(smartphones[4]); // Realme GT Neo 3

    console.log("✅ Seeding completed with 10 smartphones!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
};

seed();

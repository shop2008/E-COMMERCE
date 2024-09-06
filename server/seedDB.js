const mongoose = require("mongoose");
const Product = require("./models/Product");
const products = require("./seedData");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected for seeding..."))
  .catch((err) => console.log(err));

const seedDB = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();

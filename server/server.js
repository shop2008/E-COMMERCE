const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const productsRouter = require("./routes/products.js");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/products", productsRouter);

app.get("/", (req, res) => {
  res.send("E-commerce API is running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

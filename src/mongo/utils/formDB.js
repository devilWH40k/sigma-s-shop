/* eslint-disable no-console */

require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");
const { productsData } = require("./productsData");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "store",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Define "products" schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: "name is required" },
  category: { type: String, required: "category is required" },
  price: { type: Number, required: "price is required" },
  discount: { type: Number, required: "discount is required" },
  rating: { type: Number, required: "rating is required" },
  image: { type: String, required: "image is required" },
});

// Create "products" model
const Product = mongoose.model("Product", productSchema);

// Function to add new product to Product model
async function addProducts(productDataArray) {
  try {
    const products = await Product.insertMany(productDataArray);
    console.log(`Added ${products.length} products to the database`);
    return products;
  } catch (err) {
    console.error("Failed to add new products", err);
    return null;
  } finally {
    await mongoose.disconnect();
  }
}

addProducts(productsData);

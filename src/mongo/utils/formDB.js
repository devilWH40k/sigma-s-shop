/* eslint-disable no-console */

const mongoose = require("mongoose");
const { productsData } = require("./productsData");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "store",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Define "products" schema
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  discount: Number,
  rating: Number,
  image: String,
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

import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
  name: { type: String, required: "name is required" },
  category: { type: String, required: "category is required" },
  price: { type: Number, required: "price is required" },
  discount: { type: Number, required: "discount is required" },
  rating: { type: Number, required: "rating is required" },
  image: { type: String, required: "image is required" },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;

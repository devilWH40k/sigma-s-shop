import mongoose from "mongoose";
import { productSchema } from "./product";

export const cartItemSchema = new mongoose.Schema({
  product: { type: productSchema, required: "product is required" },
  quantity: { type: Number, required: "quantity is required" },
});

const CartItem =
  mongoose.models.CartItem || mongoose.model("CartItem", cartItemSchema);

export default CartItem;

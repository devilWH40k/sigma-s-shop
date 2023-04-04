import mongoose from "mongoose";
import { cartItemSchema } from "./cartItem";

export const orderSchema = new mongoose.Schema({
  fullName: { type: String, required: "Full name is required" },
  email: { type: String, required: "Email is required" },
  adress: { type: String, required: "Adress name is required" },
  phone: { type: String, required: "Phone name is required" },
  cartList: { type: [cartItemSchema], required: "Cart list is required" },
  message: String,
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;

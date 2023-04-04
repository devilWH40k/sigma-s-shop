import connectToDatabase from "../utils/dbConnect";
import Order from "../models/order";

export const getAllOrders = async function () {
  try {
    const db = await connectToDatabase();
    const orders = await Order.find({});
    await db.disconnect();
    return orders;
  } catch (err) {
    throw err;
  }
};

export const addOrder = async function (order) {
  try {
    const db = await connectToDatabase();
    const newOrder = Order(order);
    await newOrder.save();
    await db.disconnect();
  } catch (err) {
    throw err;
  }
};

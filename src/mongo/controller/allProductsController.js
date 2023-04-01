import connectToDatabase from "../utils/dbConnect";
import Product from "../models/product";

export const getAllProducts = async function () {
  try {
    const db = await connectToDatabase();
    const products = await Product.find({});
    await db.disconnect();
    return products;
  } catch (err) {
    throw err;
  }
};

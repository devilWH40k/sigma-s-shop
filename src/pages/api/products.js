import { getAllProducts } from "@/mongo/controller/allProductsController";

export default async function handler(req, res) {
  try {
    const products = await getAllProducts();
    res.status(200).json({ products });
  } catch (error) {
    res.status(404).json({ error });
  }
}

import { getAllProducts } from "@/mongo/controller/productsController";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const products = await getAllProducts();
        res.status(200).json({ products });
      } catch (error) {
        res.status(404).json({ error });
      }
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
  }
}

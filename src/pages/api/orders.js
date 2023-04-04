import { getAllOrders, addOrder } from "@/mongo/controller/ordersController";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const orders = await getAllOrders();
        res.status(200).json({ orders });
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
      break;
    case "POST":
      try {
        const order = req.body;
        await addOrder(order);
        res.status(200).json({ message: "successfuly added an order" });
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
  }
}

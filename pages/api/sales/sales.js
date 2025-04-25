import dbConnect from "../../util/mongo";
import Order from "../../models/Order";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const orders = await Order.find({ status: 2 }); // Only completed orders
    const totalSales = orders.reduce((sum, order) => sum + order.total, 0);

    // You can break it down by category/product later too
    res.status(200).json({
      totalSales,
      orderCount: orders.length,
      orders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching sales data." });
  }
}

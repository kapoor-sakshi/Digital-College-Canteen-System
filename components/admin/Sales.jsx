import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

const Sales = () => {
  const [data, setData] = useState([]);
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const res = await axios.get("/api/orders");
        const orders = res.data;

        const statusCount = {
          Delivered: 0,
          Pending: 0,
          Cancelled: 0,
        };

        let total = 0;

        orders.forEach(order => {
          if (order.status === 2) statusCount.Delivered += order.total;
          else if (order.status === 0) statusCount.Pending += order.total;
          else if (order.status === 3) statusCount.Cancelled += order.total;

          total += order.total;
        });

        setTotalSales(total);

        setData([
          { name: "Delivered", value: statusCount.Delivered },
          { name: "Pending", value: statusCount.Pending },
          { name: "Cancelled", value: statusCount.Cancelled },
        ]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <div className="p-5 w-full bg-black text-white">
      <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>
      <p className="mb-4 text-lg">Total Sales: ₹{totalSales.toFixed(2)}</p>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Sales;

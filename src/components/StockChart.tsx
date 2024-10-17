import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Stock {
  symbol: string;
  price: number;
  change: number;
}

interface StockChartProps {
  stock: Stock;
}

const StockChart: React.FC<StockChartProps> = ({ stock }) => {
  // This is dummy data. In a real application, you would fetch historical data from the Alpaca API.
  const data = [
    { date: '2023-01-01', price: 100 },
    { date: '2023-02-01', price: 120 },
    { date: '2023-03-01', price: 110 },
    { date: '2023-04-01', price: 130 },
    { date: '2023-05-01', price: 140 },
    { date: '2023-06-01', price: stock.price },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">{stock.symbol} Stock Price</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
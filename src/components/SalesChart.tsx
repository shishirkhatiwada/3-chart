import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Laptop } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const salesData = [
  { date: '2024-12-10', count: 53 },
  { date: '2024-12-11', count: 42 },
  { date: '2024-12-12', count: 88 },
  { date: '2024-12-13', count: 14 },
  { date: '2024-12-14', count: 77 },
  { date: '2024-12-15', count: 68 },
  { date: '2024-12-16', count: 43 },
];

export function SalesChart() {
  const data = {
    labels: salesData.map(item => new Date(item.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Laptop Sales',
        data: salesData.map(item => item.count),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Daily Laptop Sales',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Units Sold',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Laptop className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold text-gray-800">Laptop Sales Analysis</h2>
      </div>
      <Line options={options} data={data} />
    </div>
  );
}
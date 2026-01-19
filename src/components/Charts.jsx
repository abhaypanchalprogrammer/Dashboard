import React from "react";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);
const Charts = (props) => {
  const objCategory = props.filteredProducts.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Product distribution from category",
      },
    },
  };
  const barChartData = {
    labels: Object.keys(objCategory),
    datasets: [
      {
        label: "Products",
        data: Object.values(objCategory),
        yAxisID: "yProducts",
      },
    ],
  };
  const ratingChartData = {
    labels: ["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"],
    datasets: [
      {
        label: "Ratings",
        data: [120, 80, 40, 15, 5],
        backgroundColor: [
          "#22c55e",
          "#84cc16",
          "#eab308",
          "#f97316",
          "#ef4444",
        ],
      },
    ],
  };
  const ratingChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            size: 18,
          },
        },
      },
      title: {
        display: true,
        text: "Product Ratings Distribution",
      },
    },
  };
  return (
    <div>
      <div className="charts grid-cols-1  lg:grid-cols-3 gap-6 w-full">
        <div className=" lg:col-span-2 h-64 sm:h-100 lg:h-65 bg-white p-5 rounded-md shadow-lg">
          <Line data={barChartData} options={barChartOptions} />
        </div>

        <div className="h-64 sm:h-80 lg:h-65 bg-white p-5 rounded-md shadow-lg flex items-center justify-center">
          <Doughnut data={ratingChartData} options={ratingChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Charts;





import React, { useEffect, useState } from "react";
import Intro from "../components/Intro.jsx";

import { apiData } from "../api/dashboard.api.js";

import StatCardSkeleton from "../components/Skeleton.jsx";
import OrderTable from "../components/OrderTable.jsx";
import Cards from "../components/Cards.jsx";
import Charts from "../components/Charts.jsx";

const StatCard = ({ searchTerm }) => {
  const [isLoading, setIsloading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadApiData = async () => {
      try {
        setIsloading(true);
        setError(null);

        const data = await apiData();

        if (!data || data.length === 0) {
          throw new Error("No data received");
        }

        setProducts(data);
      } catch (err) {
        setError("Failed to load dashboard data");
      } finally {
        setIsloading(false);
      }
    };

    loadApiData();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalValue = filteredProducts.reduce(
    (sum, product) => sum + product.price * product.stock,
    0,
  );
  const uniqueCategories = [
    ...new Set(filteredProducts.map((product) => product.category)),
  ];
  const totalCategories = uniqueCategories.length;
  if (isLoading) {
    return <StatCardSkeleton />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <h2 className="text-lg font-semibold">Something went wrong</h2>
        <p className="text-gray-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <Intro />
      <Cards
        products={products.length}
        totalValue={totalValue.toLocaleString()}
        totalCategories={totalCategories}
      />

      <Charts filteredProducts={filteredProducts} />
      <OrderTable
        searchTerm={searchTerm}
        products={filteredProducts}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default StatCard;

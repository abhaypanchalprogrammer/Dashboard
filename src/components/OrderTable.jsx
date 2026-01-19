import React from "react";

const OrderTable = ({ products, isLoading, error }) => {
  if (isLoading) {
    return <p className="text-center p-5">Loading table...</p>;
  }
  if (error) {
    return (
      <p className="text-center p-5 text-red-500">Failed to load table data</p>
    );
  }

  if (products.length === 0) {
    return <p className="text-center p-5 text-gray-500">No products found</p>;
  }

  return (
    <div className="overflow-x-auto w-full rounded-xl" id="table">
      <table className="table w-full table-auto border-collapse border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-200 sticky top-0">
          <tr className="text-gray-700 text-sm font-semibold border-b border-gray-200">
            <th className="py-3 px-3 whitespace-nowrap">ID</th>
            <th className="py-3 px-3 whitespace-nowrap">Product Name</th>
            <th className="py-3 px-3 whitespace-nowrap">Category</th>
            <th className="py-3 px-3 whitespace-nowrap">Price</th>
            <th className="py-3 px-3 whitespace-nowrap">Stocks</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.id}
              className={`text-center transition-colors duration-200 hover:bg-gray-50 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="py-2 px-3 whitespace-nowrap text-sm">
                {product.id}
              </td>
              <td className="py-2 px-3 whitespace-nowrap text-sm">
                {product.title}
              </td>
              <td className="py-2 px-3 whitespace-nowrap text-sm">
                {product.category}
              </td>
              <td className="py-2 px-3 whitespace-nowrap text-sm">
                {product.price}
              </td>
              <td className="py-2 px-3 whitespace-nowrap text-sm">
                {product.stock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;

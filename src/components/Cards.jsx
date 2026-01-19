import React from "react";
import { FaArrowUp, FaStar } from "react-icons/fa";
const Cards = (props) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-5 bg-white shadow-lg rounded-md">
          <h2 className="text-xs sm:text-sm text-gray-500">Total Products</h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {props.products}+
          </h3>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-5 bg-white shadow-lg rounded-md">
          <h2 className="text-xs sm:text-sm text-gray-500">Total Value</h2>
          <div className="flex justify-between items-center flex-wrap">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              ${props.totalValue}
            </h3>
            <div className="flex items-center gap-1 text-green-600 text-xs sm:text-sm ">
              <FaArrowUp />
              <span className="font-medium">3.5%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-5 bg-white shadow-lg rounded-md">
          <h2 className="text-xs sm:text-sm text-gray-500">Total Categories</h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {props.totalCategories}+
          </h3>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-5 bg-white shadow-lg rounded-md">
          <h2 className="text-xs sm:text-sm text-gray-500">Total Ratings</h2>
          <div className="flex justify-between items-center">
            <div className="flex gap-1 text-yellow-400 text-sm sm:text-base flex-wrap">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center gap-1 text-green-600 text-xs sm:text-sm ">
              <FaArrowUp />
              <span className="font-medium">3.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

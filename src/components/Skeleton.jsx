import React from "react";

const StatCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 w-full animate-pulse">
      {/* Header */}
      <div className="p-2">
        <div className="h-6 w-1/3 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-5 bg-white shadow-lg rounded-md"
          >
            <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
            <div className="h-6 w-1/2 bg-gray-300 rounded mt-1"></div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        <div className="lg:col-span-2 h-64 sm:h-80 bg-gray-200 rounded-md shadow-lg"></div>
        <div className="h-64 sm:h-80 bg-gray-200 rounded-md shadow-lg"></div>
      </div>

      {/* Table Parent Skeleton Only */}
      <div className="w-full h-72 bg-gray-200 rounded-xl shadow-md"></div>
    </div>
  );
};

export default StatCardSkeleton;

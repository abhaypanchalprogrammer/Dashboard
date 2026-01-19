import React from "react";

const Intro = () => {
  return (
    <div>
      <div className="p-2">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">
          Welcome, User!
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Here is an overview of your products
        </p>
      </div>
    </div>
  );
};

export default Intro;

import React, { useState } from "react";
import {
  FaChartLine,
  FaCoins,
  FaHome,
  FaTools,
  FaTasks,
  FaBars,
  FaTimes,
  FaTachometerAlt,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";

const info = [
  { icon: <FaHome />, title: "Dashboard", to: "/" },
  { icon: <FaChartLine />, title: "Analytics", to: "/analytics" },
  { icon: <FaCoins />, title: "Sales", to: "/sales" },
  { icon: <FaMessage />, title: "Messages", to: "/messages" },
  { icon: <FaTasks />, title: "Tasks", to: "/task" },
  { icon: <FaTools />, title: "Settings", to: "/settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-blue-900 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <div
        className={`fixed md:static overflow-hidden top-15 md:top-0 left-0 h-screen bg-blue-900
        w-64 flex flex-col items-center gap-5
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="logo flex gap-2 h-20 justify-center items-center">
          <FaTachometerAlt size={30} className="text-blue-400" />
          <h1 className="text-2xl text-gray-100 font-bold">Dashboard</h1>
        </div>

        <div className="user flex flex-col gap-1 items-center">
          <img
            src="https://us.123rf.com/450wm/stockgiu/stockgiu1807/stockgiu180799655/105879808-man-smiling-profile-in-round-icon-vector-illustration-graphic-design.jpg"
            alt="user"
            className="h-24 w-24 rounded-full border border-blue-500"
          />
          <h2 className="text-xl text-gray-100">Abhay Panchal</h2>
          <p className="text-gray-300">Admin</p>
        </div>

        <div className="navigation flex flex-col text-gray-200 w-full">
          {info.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`flex gap-3 items-center text-lg px-7 py-3
              hover:bg-blue-500 transition-all pl-13"
              ${
                activeIndex === index
                  ? "bg-blue-600 font-bold"
                  : "hover:bg-blue-500"
              }`}
              onClick={() => {
                setIsOpen(false);
                setActiveIndex(index);
              }}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;



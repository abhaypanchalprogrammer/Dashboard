import React, { useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";

const Header = ({ onSearchChange }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="w-full bg-gray-100 px-4 py-3 shadow-sm relative">
      <div className="flex items-center gap-3">
        <div className="ml-15 md:ml-0 hidden sm:flex items-center bg-white rounded-full px-4 py-2 gap-2 shadow-md w-full max-w-md">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => onSearchChange(e.target.value)}
            className="bg-transparent flex-1 focus:outline-none text-gray-700"
          />
        </div>

        <button
          className="sm:hidden bg-white ml-15 p-2 rounded-full shadow-md"
          onClick={() => setShowSearch(true)}
          aria-label="Open search"
        >
          <FaSearch className="text-gray-600" />
        </button>

        <div className="flex items-center gap-4 ml-auto">
          <FaBell size={20} className="text-gray-700" />
          <img
            src="https://us.123rf.com/450wm/stockgiu/stockgiu1807/stockgiu180799655/105879808-man-smiling-profile-in-round-icon-vector-illustration-graphic-design.jpg"
            alt="user"
            className="h-9 w-9 rounded-full"
          />
        </div>
      </div>

      {showSearch && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-gray-100 px-4 py-3 shadow-md">
          <div className="flex items-center bg-white rounded-full px-4 py-2 gap-2 shadow-md">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              autoFocus
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-transparent flex-1 focus:outline-none text-gray-700"
            />
            <button
              onClick={() => setShowSearch(false)}
              className="text-sm text-gray-500"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;



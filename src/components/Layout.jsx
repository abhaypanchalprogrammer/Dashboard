import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import StatCard from "../dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Analytics from "../dashboard/Analytics";
import Sales from "../dashboard/Sales";
import Messages from "../dashboard/Messages";
import Tasks from "../dashboard/Tasks";
import Settings from "../dashboard/Settings";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <SideBar />

      <div className="flex-1 min-w-0 flex flex-col">
        <Header onSearchChange={setSearchTerm} />

        <div className="flex-1 overflow-y-auto bg-gray-100 p-3 sm:p-5 m-0 sm:m-3 rounded-none sm:rounded-xl min-w-0">
          <Routes>
            <Route path="/" element={<StatCard searchTerm={searchTerm} />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/task" element={<Tasks />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;

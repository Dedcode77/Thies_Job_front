import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 ml-24">
        <Navbar />
        <div className="mt-16">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;

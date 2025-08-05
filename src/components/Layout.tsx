// src/components/Layout.jsx
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6 bg-blue-50 min-h-[calc(100vh-64px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

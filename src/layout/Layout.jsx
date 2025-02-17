import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./Header";
import { useSelector } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";

// Layout Component
const Layout = () => {
  const userDetailsStore = useSelector((state) => state.setAuth);

  console.log("ooo:", userDetailsStore);

  return (
    <div className="container-fluid vw-100">
      {/* Row for Full Page */}
      <div className="row no-gutters vh-100 d-flex">
        {/* Sidebar Column */}
        <Sidebar />

        {/* Main Content Column */}
        <div className="col p-0 d-flex flex-column">
          {/* Header/Navbar */}
          <Header />
          {/* Main Content Area */}
          <div className="p-4 flex-grow-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const AppLayout = () => {
  return (
    <main className="main" id="main">
      <Header />
      <div className="mainContent" id="mainContent">
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;

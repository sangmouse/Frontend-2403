import React from "react";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";

const LayoutRoot = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

export default LayoutRoot;

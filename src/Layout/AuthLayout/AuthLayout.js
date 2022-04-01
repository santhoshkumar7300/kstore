import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./AuthLayout.module.css";

function AuthLayout() {
  return (
    <div>
      <p> AuthLayout</p>
      <Outlet />
    </div>
  );
}

export default AuthLayout;

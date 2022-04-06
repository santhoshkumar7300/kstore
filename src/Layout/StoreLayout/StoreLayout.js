import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../SharedComponents/Header/Header";

function StoreLayout() {
  let location = useLocation();
  console.log(location, "currentPath");

  return (
    <div>
      {/* <p>HomeLayout</p> */}

      <Header />
      <Outlet />
    </div>
  );
}

export default StoreLayout;

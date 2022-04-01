import React from "react";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      {/* <p>HomeLayout</p> */}
      <Outlet />
    </div>
  );
}

export default HomeLayout;

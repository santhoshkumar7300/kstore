import React from "react";
import { Outlet } from "react-router-dom";
import Styles from "./AuthLayout.module.css";
import loginLogo from "../../Assets/kstoreLogin.svg";

function AuthLayout() {
  return (
    <div className={Styles.bgContainer + " container-fluid"}>
      <div className={Styles.leftBg}></div>
      <div className={Styles.rightBg}></div>
      <div className={Styles.bottomLeft}></div>
      <div className={Styles.bottomRight}></div>
      <div className={Styles.bg}></div>
      <div className={Styles.loginContainer}>
        <div className={Styles.loginLeftContainer}>
          <img className={Styles.loginImg} src={loginLogo} alt="login" />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;

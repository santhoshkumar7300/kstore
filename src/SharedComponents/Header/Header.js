import React from "react";
import Styles from "./Header.module.css";
import menuIcon from "../../Assets/loginHomeMenu.svg";
import logo from "../../Assets/kstoreLogo.svg";
import { Link } from "react-router-dom";
import profile from "../../Assets/kstore_profile.svg";
import mail from "../../Assets/kstore_mail.svg";
import notification from "../../Assets/kstore_notification.svg";
import shop from "../../Assets/kstore_shop.svg";

function Header() {
  return (
    <div className="container-fluid bg-dark p-0">
      <div
        className={Styles.overallContainer + " d-flex justify-content-evenly"}
      >
        <div className={Styles.logoContainer}>
          <img className={Styles.menu} src={menuIcon} alt="menu" />
          <img className={Styles.logo} src={logo} alt="logo" />
        </div>
        <div className={Styles.linkContainer}>
          <Link className={Styles.link} to="/dashboard">
            Dashboard
          </Link>
          <Link className={Styles.link} to="/dashboard">
            Recharge
          </Link>
          <Link className={Styles.link} to="/dashboard">
            Fund Transaction
          </Link>
          <Link className={Styles.link} to="/dashboard">
            K-Store
          </Link>
          <Link className={Styles.link} to="/dashboard">
            Invoice
          </Link>
          <Link className={Styles.link} to="/dashboard">
            Commission Chart
          </Link>
        </div>
        <div className={Styles.LogoImgContainer}>
          <img
            className={Styles.LogoImg}
            src={notification}
            alt="notification"
          />
          <img className={Styles.LogoImg} src={mail} alt="mail" />
          <img className={Styles.LogoImg} src={profile} alt="profile" />
          <img className={Styles.LogoImg} src={shop} alt="shop" />
        </div>
      </div>
    </div>
  );
}

export default Header;

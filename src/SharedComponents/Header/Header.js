import React from "react";
import Styles from "./Header.module.css";
import menuIcon from "../../Assets/loginHomeMenu.svg";
import logo from "../../Assets/kstoreLogo.svg";
import { Link } from "react-router-dom";
import profile from "../../Assets/kstore_profile.svg";
import mail from "../../Assets/kstore_mail.svg";
import notification from "../../Assets/kstore_notification.svg";
import shop from "../../Assets/kstore_shop.svg";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div className="container-fluid bg-dark p-0">
      <div>
        <Offcanvas placement="start w-50" show={show} onHide={handleClose}>
          <Offcanvas.Header>
            <Offcanvas.Title>Home</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <div>
                <Link className={Styles.link} to="/dashboard">
                  Dashboard
                </Link>
              </div>
              <div>
                <Link className={Styles.link} to="/dashboard">
                  Recharge
                </Link>
              </div>
              <div>
                <Link className={Styles.link} to="/dashboard">
                  Fund Transaction
                </Link>
              </div>
              <div>
                <Link className={Styles.link} to="/dashboard">
                  K-Store
                </Link>
              </div>
              <div>
                <Link className={Styles.link} to="/dashboard">
                  Invoice
                </Link>
              </div>
              <div>
                <Link className={Styles.link} to="/dashboard">
                  Commission Chart
                </Link>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <div
        className={Styles.overallContainer + " d-flex justify-content-evenly"}
      >
        <div className={Styles.logoContainer}>
          <img
            onClick={() => setShow(true)}
            className={Styles.menu}
            src={menuIcon}
            alt="menu"
          />
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
          <img className={Styles.LogoImg2} src={mail} alt="mail" />
          <img className={Styles.LogoImg2} src={profile} alt="profile" />
          <img className={Styles.LogoImg2} src={shop} alt="shop" />
        </div>
      </div>
    </div>
  );
}

export default Header;

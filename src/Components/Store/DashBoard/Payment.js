import Styles from "./Payment.module.css";
import profile from "../../../Assets/kstore_payment_profile.svg";
import { Dropdown } from "react-bootstrap";

export default function PaymentDetails() {
  return (
    <div className={Styles.overallContainer}>
      <div className="d-flex justify-content-between pt-4">
        <div
          className={Styles.walletProfile + " d-flex justify-content-around"}
        >
          <img
            className={Styles.profileContainer}
            src={profile}
            alt="profile"
          />
          <div className={Styles.profileContent + " align-self-center"}>
            <p className="mb-0 fw-bold">Santhosh</p>
            <p className={Styles.profileContent + " mb-0 fw-bold"}>
              19 May 2022
            </p>
          </div>
        </div>
        <p className={Styles.price + " align-self-center"}>₹ 2,500.00</p>
      </div>
      <hr />
      <div
        className={
          Styles.paymentMethodContainer + " d-flex justify-content-between"
        }
      >
        <span className={Styles.paymentMethodText + " kstoreFont"}>
          Payment Method
        </span>
        <div className={Styles.dropdownContainer + " d-flex"}>
          <span className={Styles.profileContent}>Visa 5432</span>
          <Dropdown>
            <Dropdown.Toggle
              variant="white"
              id="dropdown-basic"
              style={{
                boxShadow: "unset",
                backgroundColor: "#f5f5f5",
                padding: "0px 8px",
              }}
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

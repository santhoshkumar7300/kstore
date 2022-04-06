import Styles from "./RecentActivity.module.css";
import settings from "../../../Assets/recentActivity_settings.svg";
import { useState } from "react";
import settings2 from "../../../Assets/settings2.svg";
import * as React from "react";
import purchase from "../../../Assets/kstore_table_purchase.svg";
import Test from "./test";

export default function RecentActivity() {
  const [value, setValue] = useState([null, null]);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2 className="kstoreFont fs-5 text-uppercase">
          Recent <span className="orange">Activity</span>
        </h2>
        <img className={Styles.settingsImg} src={settings} alt="settings" />
      </div>
      <div className={Styles.overallContainer}>
        <div className={Styles.leftContainer}>
          <span className="fw-bold align-self-center">History</span>
          <span className="fw-bold align-self-center">Upcoming</span>
        </div>
        <div className={Styles.rightContainer}>
          <div className={Styles.dateContainer}>
            <p>santhosh</p>
          </div>
          <div className={Styles.settings2Container}>
            <img
              className={Styles.settingsImg}
              src={settings2}
              alt="settings"
            />
          </div>
          <div>
            <div className={Styles.addContainer}>
              <span className="text-white fs-3 align-self-center">+</span>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.hrContainer + " w-100"}>
        <hr className={Styles.hr1} />
        <hr className={Styles.hr2} />
      </div>
      <div className={Styles.mapContainer}>
        {[...new Array(10)].map((e) => (
          <div className={Styles.tableContainer}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className={Styles.tableImgContainer}>
                      <img
                        className={Styles.settingsImg}
                        src={purchase}
                        alt="shop"
                      />
                    </div>
                  </td>
                  <td>Payment to Shoppe</td>
                  <td>28 Mar 2022</td>
                  <td>₹ 323.00</td>
                  <td>Paid</td>
                  <td>. . . .</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

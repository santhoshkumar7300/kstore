import Styles from "./RecentActivity.module.css";
import settings from "../../../Assets/recentActivity_settings.svg";
import { useState } from "react";
import settings2 from "../../../Assets/settings2.svg";
import * as React from "react";
import purchase from "../../../Assets/kstore_table_purchase.svg";
import Test from "./test";
import cal from "../../../Assets/cal.svg";
import { addDays } from "date-fns";
// import { Calendar } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import moment from "moment";
export default function RecentActivity() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [isDate, setIsDate] = useState(false);
  console.log(state, "===date");

  // React.useEffect(() => {
  //   setIsDate(false);
  // }, [isDate]);

  // const handleListener = (e) => {
  //   setIsDate(false);
  // };

  // const handleDate = (date) => {
  //   console.log(date, "==date");
  // };

  // const selectionRange = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: "selection",
  // };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2 className="kstoreFont fs-5 text-uppercase">
          Recent <span className="orange">Activity</span>
        </h2>
        <img className={Styles.settingsImg} src={settings} alt="settings" />
      </div>

      {isDate ? (
        <DateRangePicker
          onChange={(item) => {
            setState([item.selection]);
            if (item.selection.startDate !== item.selection.endDate)
              setIsDate(false);
          }}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          ranges={state}
          direction="horizontal"
          preventSnapRefocus={true}
          calendarFocus="backwards"
          id="date"
        />
      ) : null}
      <div className={Styles.overallContainer}>
        <div className={Styles.leftContainer}>
          <span className="fw-bold align-self-center">History</span>
          <span className="fw-bold align-self-center">Upcoming</span>
        </div>
        <div className={Styles.rightContainer}>
          <div className={Styles.dateContainer}>
            <div className="d-flex justify-content-evenly w-100">
              <img className={Styles.dateImg} src={cal} alt="calender" />
              <span onClick={() => setIsDate(!isDate)} className={Styles.date}>
                {moment(state[0].startDate).format("D MMM YY")} -{" "}
                {moment(state[0].endDate).format("D MMM YY")}
              </span>
            </div>
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
                  <td className={Styles.td}>Payment to Shoppe</td>
                  <td className={Styles.td}>28 Mar 2022</td>
                  <td className={Styles.td}>₹ 323.00</td>
                  <td className={Styles.td}>Paid</td>
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

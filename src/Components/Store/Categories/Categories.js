import Styles from "./Categories.module.css";
import settings from "../../../Assets/recentActivity_settings.svg";
import { Dropdown } from "react-bootstrap";
import CategoriesList from "./CategoriesList";
import React, { useState } from "react";
import CategoriesOptions from "./CategoriesOptions";
import Popup from "./Popup";

export default function Categories() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Electronics",
      subItems: [
        "Air purifier",
        "Air conditioner",
        "Alarm clock",
        "Backup charger",
        "Bread maker",
        "Banknote counter",
        "Bluetooth speaker",
        "Bulb",
        "Computer",
      ],
    },
    {
      id: 2,
      name: "Food & Beverage",
      subItems: [
        "Air purifier",
        "Air conditioner",
        "Alarm clock",
        "Backup charger",
        "Bread maker",
        "Banknote counter",
        "Bluetooth speaker",
        "Bulb",
        "Computer",
      ],
    },
    {
      id: 3,
      name: "Home & Furniture",
      subItems: [
        "Air purifier",
        "Air conditioner",
        "Alarm clock",
        "Backup charger",
        "Bread maker",
        "Banknote counter",
        "Bluetooth speaker",
        "Bulb",
        "Computer",
      ],
    },
    {
      id: 4,
      name: "Medicals",
      subItems: [
        "Air purifier",
        "Air conditioner",
        "Alarm clock",
        "Backup charger",
        "Bread maker",
        "Banknote counter",
        "Bluetooth speaker",
        "Bulb",
        "Computer",
      ],
    },
  ]);

  const [isPopup, setIsPopup] = useState(false);

  return (
    <div className={Styles.bg}>
      <div
        className={
          Styles.searchParentContainer + " d-flex justify-content-between"
        }
      >
        <div className="w-100">
          <input
            className={Styles.searchInput}
            type="text"
            placeholder="Search here..."
          />
          <button className={Styles.searchBtn}>Search</button>
        </div>
        <div className={Styles.settingsContainer}>
          <img className={Styles.settingsImg} src={settings} alt="settings" />
        </div>
      </div>
      <div className={Styles.dropdownParent + " d-flex"}>
        {data.map((e) => (
          <Dropdown className={Styles.dropdownContainer}>
            <Dropdown.Toggle
              className={Styles.dropdown}
              variant="white"
              id="dropdown-basic"
              style={{
                boxShadow: "unset",
                backgroundColor: "white",
                fontSize: "13px",
                fontWeight: "bold",
                width: "200px",
                height: "50px",
                borderRadius: "8px",
              }}
            >
              {e.name}
            </Dropdown.Toggle>
            <CategoriesOptions data={e.subItems} />
          </Dropdown>
        ))}
      </div>
      <div className={Styles.categoriesListContainer}>
        {[...new Array(20)].map((e) => (
          <CategoriesList />
        ))}
      </div>
      {isPopup ? <Popup /> : null}
    </div>
  );
}

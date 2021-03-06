import Styles from "./Products.module.css";
import search from "../../../Assets/search.svg";
import Checkbox from "./Checkbox";
import { Dropdown, Offcanvas } from "react-bootstrap";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Products() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div className={Styles.overallContainer}>
      <div className={Styles.mblFilter}>
        <div className={Styles.filter} onClick={() => setShow(true)}>
          <span>Filter</span>
        </div>
        <Offcanvas placement="bottom h-75" show={show} onHide={handleClose}>
          <Offcanvas.Header>
            <Offcanvas.Title>Filter By</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <div>
                <div className="d-flex justify-content-between">
                  <h4 className="kstoreFont">Categories</h4>
                  <span className={Styles.clearall + " orange"}>Clear All</span>
                </div>
              </div>
              <div className="d-flex">
                <hr className={Styles.hr1} />
                <hr className={Styles.hr2} />
              </div>
              <div className={Styles.searchChildContainer}>
                <input
                  className={Styles.searchInput}
                  type="text"
                  placeholder="Search......"
                />
                <div className="align-self-center">
                  <img className={Styles.searchImg} src={search} alt="search" />
                </div>
              </div>
              <div>
                <Checkbox />
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h4 className="kstoreFont">Brand</h4>
                  <span className={Styles.clearall + " orange"}>Clear All</span>
                </div>
              </div>
              <div className="d-flex">
                <hr className={Styles.hr1} />
                <hr className={Styles.hr2} />
              </div>
              <div>
                <Checkbox />
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <h4 className="kstoreFont">Price</h4>
                  <span className={Styles.clearall + " orange"}>Clear All</span>
                </div>
              </div>
              <div className="d-flex">
                <hr className={Styles.hr1} />
                <hr className={Styles.hr2} />
              </div>
              <div>
                <Checkbox />
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div className={Styles.leftContainer}>
        <div>
          <div className="d-flex justify-content-between">
            <h4 className="kstoreFont">Categories</h4>
            <span className={Styles.clearall + " orange"}>Clear All</span>
          </div>
        </div>
        <div className="d-flex">
          <hr className={Styles.hr1} />
          <hr className={Styles.hr2} />
        </div>
        <div className={Styles.searchChildContainer}>
          <input
            className={Styles.searchInput}
            type="text"
            placeholder="Search......"
          />
          <div className="align-self-center">
            <img className={Styles.searchImg} src={search} alt="search" />
          </div>
        </div>
        <div>
          <Checkbox />
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <h4 className="kstoreFont">Brand</h4>
            <span className={Styles.clearall + " orange"}>Clear All</span>
          </div>
        </div>
        <div className="d-flex">
          <hr className={Styles.hr1} />
          <hr className={Styles.hr2} />
        </div>
        <div>
          <Checkbox />
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <h4 className="kstoreFont">Price</h4>
            <span className={Styles.clearall + " orange"}>Clear All</span>
          </div>
        </div>
        <div className="d-flex">
          <hr className={Styles.hr1} />
          <hr className={Styles.hr2} />
        </div>
        <div>
          <Checkbox />
        </div>
      </div>
      <div className={Styles.rightContainer}>
        <div className="d-flex justify-content-between">
          <h4 className={Styles.leftHeading + " kstoreFont mb-0"}>
            Showing 30 out of <span className="orange">1000 products </span>
          </h4>
          <div className={Styles.sortText}>
            <span className={Styles.sort + " align-self-center"}>Sort By</span>
            <div className={Styles.selectContainer}>
              <select
                class={Styles.select + " form-select"}
                // style={{ border: "none", boxShadow: "unset" }}
                aria-label="Default select example"
              >
                <option selected>select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div className={Styles.mblProducts}>
          {[...new Array(15)].map((e) => (
            <ProductItem />
          ))}
        </div>
      </div>
    </div>
  );
}

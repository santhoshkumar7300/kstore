import Styles from "./Products.module.css";
import search from "../../../Assets/search.svg";
import Checkbox from "./Checkbox";
import { Dropdown } from "react-bootstrap";
import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <div className={Styles.overallContainer}>
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
          <h4 className="kstoreFont">
            Showing 30 out of <span className="orange">1000 products </span>
          </h4>
          <div className="w-25 d-flex justify-content-between">
            <span className="align-self-center">Sort By</span>
            <div className={Styles.selectContainer}>
              <select
                class="form-select"
                style={{ border: "none", boxShadow: "unset" }}
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
        <div className="d-flex flex-wrap justify-content-between">
          {[...new Array(15)].map((e) => (
            <ProductItem />
          ))}
        </div>
      </div>
    </div>
  );
}

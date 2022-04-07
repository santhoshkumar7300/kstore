import { useState } from "react";
import Styles from "./Checkbox.module.css";

export default function Checkbox() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div
        className={Styles.checkboxContainer}
        style={
          isShow ? { height: "unset" } : { height: "250px", overflow: "hidden" }
        }
      >
        {[...new Array(20)].map((e) => (
          <div class={Styles.checkbox + " form-check mt-3"}>
            <input
              class={Styles.input + " form-check-input"}
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">Medical Aids</label>
          </div>
        ))}
      </div>
      <p
        className={Styles.showmore + " orange"}
        onClick={() => setIsShow(true)}
        style={{ display: isShow ? "none" : "block" }}
      >
        + Show More
      </p>
    </div>
  );
}

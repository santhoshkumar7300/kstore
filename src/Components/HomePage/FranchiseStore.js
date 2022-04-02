import Styles from "./FranchiseEnquiry.module.css";
import { Form } from "react-bootstrap";

export default function FranchiseStore() {
  return (
    <form className={Styles.formContainer}>
      <div>
        <p className="text-white mb-0">Store situated at</p>
        <div className={Styles.storeCheckbox + " mt-3"}>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label text-white">Own Building</label>
          </div>
          <div class="form-check">
            <input
              class={Styles.checkbox + " form-check-input"}
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label text-white">Rental</label>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white mb-0 mt-3">Floor</p>
        <div className={Styles.storeFloorCheckbox + " mt-3"}>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label text-white">Ground</label>
          </div>
          <div class="form-check">
            <input
              class={Styles.checkbox + " form-check-input"}
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label text-white">First</label>
          </div>
          <div class="form-check">
            <input
              class={Styles.checkbox + " form-check-input"}
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label text-white">Second</label>
          </div>
        </div>
      </div>
    </form>
  );
}

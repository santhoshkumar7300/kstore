import Styles from "./FranchiseEnquiry.module.css";
import { Form } from "react-bootstrap";
export default function FranchiseBusiness() {
  return (
    <form>
      <div className="d-flex">
        <label className={Styles.label + " text-white"}>
          Preferred Business Location
        </label>
        <div className="w-100 d-flex justify-content-evenly">
          <div className="w-50">
            <label className="text-white">City*</label>
            <div className={Styles.inputContainer}>
              <input className={Styles.input} type="text" />
            </div>
          </div>
          <div className="w-50">
            <label className="text-white">state*</label>
            <div className={Styles.AddressinputContainer}>
              <input className={Styles.input} type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mt-5">
        <div className={Styles.thirdChildContainer}>
          <label className="text-white">Area of store preferred</label>
          <div className={Styles.inputContainer}>
            <Form.Select
              className={Styles.select + " p-0"}
              aria-label="Default select example"
            >
              <option value="1">TIER 1 (100 SQ FT TO 150 SQ FT)</option>
              <option value="2">TIER 2 (150 SQ FT TO 250 SQ FT)</option>
              <option value="3">TIER 3 (250 SQ FT TO 350 SQ FT)</option>
              <option value="3">TIER 4 (350 SQ FT TO 500 SQ FT)</option>
            </Form.Select>
          </div>
        </div>
        <div className="d-flex w-100">
          <div className="w-100 d-flex justify-content-evenly">
            <div className="w-50">
              <label className="text-white">Convinent time for call*</label>
              <div className={Styles.inputContainer}>
                <input className={Styles.input} type="text" />
              </div>
            </div>
            <div className="w-50">
              <label className="text-white">Refered by*</label>
              <div className={Styles.AddressinputContainer}>
                <input className={Styles.input} type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-between mt-5">
        <div className={Styles.businessCheckbox + " d-flex"}>
          <label className={Styles.businessLabel + " text-white"}>
            Time frame on starting Business
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label class="form-check-label text-white">Immediate</label>
          </div>
        </div>
        <div className="w-100">
          <div className={Styles.othersContainer}>
            <label className="text-white">Others*</label>
            <div className={Styles.AddressinputContainer}>
              <input className={Styles.input} type="text" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

import { Form } from "react-bootstrap";
import Styles from "./FranchiseEnquiry.module.css";
import person from "../../Assets/person.png";
import shoppingBag from "../../Assets/shoppingBag.png";
import store from "../../Assets/white_store.png";
import white_ok from "../../Assets/white_ok.png";
import FranchisePersonal from "./FranchisePersonal";
import FranchiseBusiness from "./FranchiseBusiness";
import FranchiseStore from "./FranchiseStore";
import success from "../../Assets/success.png";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FranchiseEnquiry() {
  const [formState, setFormState] = useState(2);
  const [store, setStore] = useState("");
  const [floor, setFloor] = useState("");

  const changeState = (data) => {
    setFormState(data);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      dob: "",
      address: "",
      currentOccupation: "",
      experience: "",
      gender: "",
      nationality: "",
      mobile: "",
      email: "",
      city: "",
      state: "",
      convinentCall: "",
      referedBy: "",
      timeFrame: "",
      storePrefered: "",
      // storeSituated: "",
      // floor: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      dob: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      currentOccupation: Yup.string().required("Required"),
      experience: Yup.string().required("Required"),
      gender: Yup.string().required("Required"),
      nationality: Yup.string().required("Required"),
      mobile: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      convinentCall: Yup.string().required("Required"),
      referedBy: Yup.string().required("Required"),
      timeFrame: Yup.string().required("Required"),
      // storeSituated: Yup.string().required("Required"),
      // floor: Yup.string().required("Required"),
      storePrefered: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      console.log(values);
      // personalDetailsService();
    },
  });

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className="text-white">
          Franchise <span className="orange">Enquiry</span>
        </h1>
      </div>

      <div>
        <ul className={Styles.progressbar}>
          <div
            className={Styles.liContainer}
            // style={
            //   formState <= 3
            //     ? { backgroundColor: "#ff7b26" }
            //     : { backgroundColor: "lightgray" }
            // }
          >
            <li>
              <img className={Styles.li_img} src={person} alt="person" />
            </li>
          </div>
          <div className={Styles.hr} />
          <div
            className={Styles.liContainer}
            // style={
            //   formState <= 3
            //     ? { backgroundColor: "#ff7b26" }
            //     : { backgroundColor: "lightgray" }
            // }
          >
            <li>
              <img
                className={Styles.li_shopping}
                src={shoppingBag}
                alt="person"
              />
            </li>
          </div>
          <div className={Styles.hr} />
          <div
            className={Styles.liContainer}
            // style={
            //   formState === 3
            //     ? { backgroundColor: "#ff7b26" }
            //     : { backgroundColor: "lightgray" }
            // }
          >
            <li>
              <img className={Styles.li_shopping} src={store} alt="person" />
            </li>
          </div>
          <div className={Styles.hr} />
          <div
            className={Styles.liContainer}
            // style={
            //   formState === 3
            //     ? { backgroundColor: "#ff7b26" }
            //     : { backgroundColor: "lightgray" }
            // }
          >
            <li>
              <img className={Styles.li_shopping} src={white_ok} alt="person" />
            </li>
          </div>
        </ul>
      </div>

      <div className="container">
        <form>
          {formState === 0 ? (
            <div>
              <div className="d-flex">
                <div className="w-50">
                  <label className="text-white">Name*</label>
                  <div className={Styles.inputContainer} id="name">
                    <input
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      className={Styles.input}
                      type="text"
                    />
                  </div>
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger fs-6">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className="w-50">
                  <label className="text-white">DOB *</label>

                  <div className={Styles.AddressinputContainer}>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.dob}
                      className={Styles.input}
                      name="dob"
                      type="date"
                      id="dob"
                    />
                  </div>
                  {formik.touched.dob && formik.errors.dob ? (
                    <div className="text-danger fs-6">{formik.errors.dob}</div>
                  ) : null}
                </div>
              </div>

              <label className="text-white mt-5">Address*</label>
              <div className={Styles.AddressinputContainer}>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  name="address"
                  className={Styles.input}
                  type="text"
                />
              </div>
              {formik.touched.address && formik.errors.address ? (
                <div className="text-danger fs-6">{formik.errors.address}</div>
              ) : null}

              <div className="d-flex mt-4">
                <div className={Styles.thirdChildContainer}>
                  <label className="text-white">Current Occupation*</label>
                  <div className={Styles.AddressinputContainer}>
                    <input
                      name="currentOccupation"
                      className={Styles.input}
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.currentOccupation}
                    />
                  </div>
                  {formik.touched.currentOccupation &&
                  formik.errors.currentOccupation ? (
                    <div className="text-danger fs-6">
                      {formik.errors.currentOccupation}
                    </div>
                  ) : null}
                </div>

                <div className={Styles.thirdChildContainer}>
                  <label className="text-white">Years of experience*</label>
                  <div className={Styles.inputContainer}>
                    <Form.Select
                      className={Styles.select + " p-0"}
                      aria-label="Default select example"
                      name="experience"
                      onChange={formik.handleChange}
                      value={formik.values.experience}
                    >
                      <option value="1">0-1</option>
                      <option value="2">1-2</option>
                      <option value="3">2-5</option>
                      <option value="3">5-10</option>
                      <option value="3">10-15</option>
                    </Form.Select>
                  </div>
                  {formik.touched.experience && formik.errors.experience ? (
                    <div className="text-danger fs-6">
                      {formik.errors.experience}
                    </div>
                  ) : null}
                </div>

                <div className={Styles.thirdChildContainer}>
                  <label className="text-white">Gender*</label>
                  <div className={Styles.radioInput + " d-flex"}>
                    <div className={Styles.radioContainer}>
                      <input
                        onChange={formik.handleChange}
                        className="align-self-center"
                        type="radio"
                        value="1"
                        name="gender"
                      />
                      <label
                        className={Styles.radioLabel + " text-white"}
                        for="age1"
                      >
                        Male
                      </label>
                    </div>
                    <div className={Styles.radioContainer}>
                      <input
                        onChange={formik.handleChange}
                        value="2"
                        type="radio"
                        name="gender"
                      />
                      <label className={Styles.radioLabel + " text-white"}>
                        Female
                      </label>
                    </div>
                    {formik.touched.gender && formik.errors.gender ? (
                      <div className="text-danger fs-6">
                        {formik.errors.gender}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <div className={Styles.thirdChildContainer}>
                  <label className="text-white">Nationality*</label>
                  <div className={Styles.AddressinputContainer}>
                    <Form.Select
                      className={Styles.select + " p-0"}
                      aria-label="Default select example"
                      name="nationality"
                      onChange={formik.handleChange}
                      value={formik.values.nationality}
                    >
                      <option value="1">Indian</option>
                      <option value="2">NRI</option>
                    </Form.Select>
                  </div>
                  {formik.touched.nationality && formik.errors.nationality ? (
                    <div className="text-danger fs-6">
                      {formik.errors.nationality}
                    </div>
                  ) : null}
                </div>
                <div className={Styles.thirdChildContainer}>
                  <div>
                    <label className="text-white">Mobile Number*</label>
                    <div className={Styles.AddressinputContainer}>
                      <input
                        onChange={formik.handleChange}
                        value={formik.values.mobile}
                        name="mobile"
                        className={Styles.input}
                        type="text"
                      />
                    </div>
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div className="text-danger fs-6">
                        {formik.errors.mobile}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={Styles.thirdChildContainer}>
                  <label className="text-white">Email*</label>
                  <div className={Styles.AddressinputContainer}>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      name="email"
                      className={Styles.input}
                      type="email"
                    />
                  </div>
                  {formik.touched.address && formik.errors.address ? (
                    <div className="text-danger fs-6">
                      {formik.errors.address}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : formState === 1 ? (
            <div>
              <div className="d-flex">
                <label className={Styles.label + " text-white"}>
                  Preferred Business Location
                </label>
                <div className="w-100 d-flex justify-content-evenly">
                  <div className="w-50">
                    <label className="text-white">City*</label>
                    <div className={Styles.inputContainer}>
                      <input
                        onChange={formik.handleChange}
                        name="city"
                        className={Styles.input}
                        type="text"
                      />
                    </div>
                    {formik.touched.city && formik.errors.city ? (
                      <div className="text-danger fs-6">
                        {formik.errors.city}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-50">
                    <label className="text-white">state*</label>
                    <div className={Styles.AddressinputContainer}>
                      <input
                        onChange={formik.handleChange}
                        name="state"
                        className={Styles.input}
                        type="text"
                      />
                    </div>
                    {formik.touched.state && formik.errors.state ? (
                      <div className="text-danger fs-6">
                        {formik.errors.state}
                      </div>
                    ) : null}
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
                      name="storePrefered"
                      onChange={formik.handleChange}
                    >
                      <option value="1">TIER 1 (100 SQ FT TO 150 SQ FT)</option>
                      <option value="2">TIER 2 (150 SQ FT TO 250 SQ FT)</option>
                      <option value="3">TIER 3 (250 SQ FT TO 350 SQ FT)</option>
                      <option value="3">TIER 4 (350 SQ FT TO 500 SQ FT)</option>
                    </Form.Select>
                  </div>
                  {formik.touched.storePrefered &&
                  formik.errors.storePrefered ? (
                    <div className="text-danger fs-6">
                      {formik.errors.storePrefered}
                    </div>
                  ) : null}
                </div>
                <div className="d-flex w-100">
                  <div className="w-100 d-flex justify-content-evenly">
                    <div className="w-50">
                      <label className="text-white">
                        Convinent time for call*
                      </label>
                      <div className={Styles.inputContainer}>
                        <input
                          name="convinentCall"
                          className={Styles.input}
                          type="text"
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.touched.convinentCall &&
                      formik.errors.convinentCall ? (
                        <div className="text-danger fs-6">
                          {formik.errors.convinentCall}
                        </div>
                      ) : null}
                    </div>
                    <div className="w-50">
                      <label className="text-white">Refered by*</label>
                      <div className={Styles.AddressinputContainer}>
                        <input
                          name="referedBy"
                          className={Styles.input}
                          type="text"
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.touched.referedBy && formik.errors.referedBy ? (
                        <div className="text-danger fs-6">
                          {formik.errors.referedBy}
                        </div>
                      ) : null}
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
                      value="1"
                      name="timeFrame"
                      id="flexCheckChecked"
                      onChange={formik.handleChange}
                    />
                    <label class="form-check-label text-white">Immediate</label>
                  </div>
                  {formik.touched.timeFrame && formik.errors.timeFrame ? (
                    <div className="text-danger fs-6">
                      {formik.errors.timeFrame}
                    </div>
                  ) : null}
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
            </div>
          ) : formState === 2 ? (
            <div>
              <div>
                <p className="text-white mb-0">Store situated at</p>
                <div className={Styles.storeCheckbox + " mt-3"}>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value={store}
                      id="flexCheckDefault"
                      onChange={() => setStore("Own Building")}
                      checked={store === "Own Building"}
                    />
                    <label class="form-check-label text-white">
                      Own Building
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class={Styles.checkbox + " form-check-input"}
                      type="checkbox"
                      value={store}
                      id="flexCheckChecked"
                      onChange={() => setStore("Rental")}
                      checked={store === "Rental"}
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
                      value={floor}
                      id="flexCheckDefault"
                      onChange={() => setFloor("ground")}
                      checked={floor === "ground"}
                    />
                    <label class="form-check-label text-white">Ground</label>
                  </div>
                  <div class="form-check">
                    <input
                      class={Styles.checkbox + " form-check-input"}
                      type="checkbox"
                      value={floor}
                      id="flexCheckChecked"
                      onChange={() => setFloor("first")}
                      checked={floor === "first"}
                    />
                    <label class="form-check-label text-white">First</label>
                  </div>
                  <div class="form-check">
                    <input
                      class={Styles.checkbox + " form-check-input"}
                      type="checkbox"
                      value={floor}
                      id="flexCheckChecked"
                      onChange={() => setFloor("second")}
                      checked={floor === "second"}
                    />
                    <label class="form-check-label text-white">Second</label>
                  </div>
                </div>
              </div>
            </div>
          ) : formState === 3 ? (
            <div>
              <p className={Styles.success}>success!!!</p>
              <div className="text-center">
                <img src={success} alt="success" />
              </div>
            </div>
          ) : null}
          <div className="text-center mt-5">
            {formState > 0 ? (
              <button className={Styles.previousBtn}>Previous</button>
            ) : null}
            <button className={Styles.nextBtn}>Next</button>
          </div>
        </form>
        {/* {formState === 0 ? (
          <FranchisePersonal changeState={changeState} />
        ) : formState === 1 ? (
          <FranchiseBusiness />
        ) : formState === 2 ? (
          <FranchiseStore />
        ) : formState === 3 ? (
          <div>
            <p className={Styles.success}>success!!!</p>
            <div className="text-center">
              <img src={success} alt="success" />
            </div>
          </div>
        ) : null} */}
        {/* <div className="text-center mt-5">
          {formState > 1 ? (
            <button className={Styles.previousBtn}>Previous</button>
          ) : null}
          <button className={Styles.nextBtn}>Next</button>
        </div> */}
      </div>
    </div>
  );
}

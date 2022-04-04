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
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  cityService,
  personalDetailsService,
  stateService,
} from "../../Services/ApiServices";
import { toast } from "react-toastify";

export default function FranchiseEnquiry() {
  const [formState, setFormState] = useState(0);
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  useEffect(() => {
    stateService()
      .then((res) => setState(res.data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(state, "===state");

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
      timeFrame: "0",
      storePrefered: "",
      storeSituated: "",
      floor: "",
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
      storeSituated: Yup.string().required("Required"),
      floor: Yup.string().required("Required"),
      storePrefered: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    validateOnChange: false,

    onSubmit: (values) => {
      handleData(values);
    },
  });
  const handleCity = (data) => {
    let formData = new FormData();
    formData.append("state_id", data);
    console.log(data, "====stateid");
    cityService(formData)
      .then((res) => setCity(res.data))
      .catch((err) => console.log(err));
  };

  const handlePrevios = () => {
    setFormState(formState - 1);
  };

  const handleData = (data) => {
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("dob", data.dob);
    formData.append("email", data.email);
    formData.append("address", data.address);
    formData.append("current_occupation", data.currentOccupation);
    formData.append("experience", data.experience);
    formData.append("gender", parseInt(data.gender));
    formData.append("nationality", data.nationality);
    formData.append("mobile_no", parseInt(data.mobile));
    formData.append("city", parseInt(data.city));
    formData.append("state", parseInt(data.state));
    formData.append("store_preferred", data.storePrefered);
    formData.append("convinent_call_time", data.convinentCall);
    formData.append("refered_by", data.referedBy);
    formData.append(
      "time_frame_on_starting_business",
      parseInt(data.timeFrame)
    );
    formData.append("store_situated_at", data.storeSituated);
    formData.append("floor", data.floor);
    personalDetailsService(formData)
      .then((res) => {
        console.log("response");
        if (res.status === 200) {
          console.log(res, "===res");
          toast(res.data, { type: success });
          setFormState(3);
        }
      })
      .catch((err) => {
        // console.log(err?.response?.data?.detail, "=======error");
        // if (err?.response?.data?.detail[0].msg) {
        //   toast(err.detail[0].msg);
        // } else if (err?.response?.data?.detail) {
        //   toast(err.detail[0]);
        // }
        if (err?.response?.data?.detail) {
          toast(err.response.data.detail[0].msg);
        } else {
          toast("Something went wrong!!");
        }
      })
      .finally(() => setLoader(false));
  };

  return (
    <div>
      {loader ? (
        <div className={Styles.loaderParent}>
          <div className={Styles.loader}></div>
        </div>
      ) : null}
      <div className="d-flex justify-content-center">
        <h1 className="text-white kstoreFont">
          Franchise <span className="orange">Enquiry</span>
        </h1>
      </div>

      <div>
        <ul className={Styles.progressbar}>
          <div
            className={Styles.liContainer}
            style={{ backgroundColor: "#ff7b26" }}
          >
            <li>
              <img className={Styles.li_img} src={person} alt="person" />
            </li>
            <span style={{ color: "#ff7b26" }} className={Styles.positonName}>
              Personal
            </span>
          </div>
          <div className={Styles.hr} style={{ backgroundColor: "#ff7b26" }} />
          <div
            className={Styles.liContainer}
            style={
              formState === 1 || formState === 2 || formState === 3
                ? { backgroundColor: "#ff7b26" }
                : { backgroundColor: "lightgray" }
            }
          >
            <li>
              <img
                className={Styles.li_shopping}
                src={shoppingBag}
                alt="person"
              />
            </li>
            <span
              style={
                formState === 1 || formState === 2 || formState === 3
                  ? { color: "#ff7b26" }
                  : { color: "lightgray" }
              }
              className={Styles.positonName}
            >
              Business
            </span>
          </div>
          <div
            className={Styles.hr}
            style={
              formState === 1 || formState === 2 || formState === 3
                ? { backgroundColor: "#ff7b26" }
                : { backgroundColor: "lightgray" }
            }
          />
          <div
            className={Styles.liContainer}
            style={
              formState === 2 || formState === 3
                ? { backgroundColor: "#ff7b26" }
                : { backgroundColor: "lightgray" }
            }
          >
            <li>
              <img className={Styles.li_shopping} src={store} alt="store" />
            </li>
            <span
              style={
                formState === 2 || formState === 3
                  ? { color: "#ff7b26" }
                  : { color: "lightgray" }
              }
              className={Styles.positionStore}
            >
              Store
            </span>
          </div>
          <div
            className={Styles.hr}
            style={
              formState === 2 || formState === 3
                ? { backgroundColor: "#ff7b26" }
                : { backgroundColor: "lightgray" }
            }
          />
          <div
            className={Styles.liContainer}
            style={
              formState === 3
                ? { backgroundColor: "#ff7b26" }
                : { backgroundColor: "lightgray" }
            }
          >
            <li>
              <img className={Styles.li_shopping} src={white_ok} alt="person" />
            </li>
            <span
              style={
                formState === 3 ? { color: "#ff7b26" } : { color: "lightgray" }
              }
              className={Styles.positonName}
            >
              Complete
            </span>
          </div>
        </ul>
      </div>

      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
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
                      <option value="0-1">0-1</option>
                      <option value="1-2">1-2</option>
                      <option value="2-5">2-5</option>
                      <option value="5-10">5-10</option>
                      <option value="10-15">10-15</option>
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
                        className={Styles.radioBtn + " align-self-center"}
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
                        className={Styles.radioBtn + " align-self-center"}
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
                      <option value="Indian">Indian</option>
                      <option value="NRI">NRI</option>
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
                      <Form.Select
                        className={Styles.select + " p-0"}
                        aria-label="Default select example"
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                      >
                        {city.map((e) => (
                          <option value={e.cities_id}>{e.cities_name}</option>
                        ))}
                      </Form.Select>
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
                      <Form.Select
                        className={Styles.select + " p-0"}
                        aria-label="Default select example"
                        name="state"
                        onChange={formik.handleChange}
                        value={formik.values.state}
                      >
                        {state.map((e) => (
                          <option
                            onClick={() => handleCity(e.state_id)}
                            value={e.state_id}
                          >
                            {e.state_name}
                          </option>
                        ))}
                      </Form.Select>
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
                      <option value="TIER 1 (100 SQ FT TO 150 SQ FT)">
                        TIER 1 (100 SQ FT TO 150 SQ FT)
                      </option>
                      <option value="TIER 2 (150 SQ FT TO 250 SQ FT)">
                        TIER 2 (150 SQ FT TO 250 SQ FT)
                      </option>
                      <option value="TIER 3 (250 SQ FT TO 350 SQ FT)">
                        TIER 3 (250 SQ FT TO 350 SQ FT)
                      </option>
                      <option value="TIER 4 (350 SQ FT TO 500 SQ FT)">
                        TIER 4 (350 SQ FT TO 500 SQ FT)
                      </option>
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
                      onChange={(e) => {
                        if (formik.values.timeFrame === "0") {
                          formik.setFieldValue("timeFrame", e.target.value);
                        } else {
                          formik.setFieldValue("timeFrame", "0");
                        }
                        // formik.setFieldValue("timeFrame", e.target.value);
                        // console.log(formik.values.timeFrame, "===timeFrame");
                      }}
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
                      value="ownbuilding"
                      name="storeSituated"
                      onChange={(e) =>
                        formik.setFieldValue("storeSituated", e.target.value)
                      }
                      checked={formik.values.storeSituated === "ownbuilding"}
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label text-white">
                      Own Building
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class={Styles.checkbox + " form-check-input"}
                      type="checkbox"
                      id="flexCheckChecked"
                      value="rental"
                      name="storeSituated"
                      onChange={(e) =>
                        formik.setFieldValue("storeSituated", e.target.value)
                      }
                      checked={formik.values.storeSituated === "rental"}
                    />
                    <label class="form-check-label text-white">Rental</label>
                  </div>
                </div>
                {formik.touched.storeSituated && formik.errors.storeSituated ? (
                  <div className="text-danger fs-6">
                    {formik.errors.storeSituated}
                  </div>
                ) : null}
              </div>
              <div>
                <p className="text-white mb-0 mt-3">Floor</p>
                <div className={Styles.storeFloorCheckbox + " mt-3"}>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="ground"
                      id="flexCheckDefault"
                      name="floor"
                      onChange={(e) =>
                        formik.setFieldValue("floor", e.target.value)
                      }
                      checked={formik.values.floor === "ground"}
                    />
                    <label class="form-check-label text-white">Ground</label>
                  </div>
                  <div class="form-check">
                    <input
                      class={Styles.checkbox + " form-check-input"}
                      type="checkbox"
                      name="floor"
                      value="first"
                      id="flexCheckChecked"
                      onChange={(e) =>
                        formik.setFieldValue("floor", e.target.value)
                      }
                      checked={formik.values.floor === "first"}
                    />
                    <label class="form-check-label text-white">First</label>
                  </div>
                  <div class="form-check">
                    <input
                      class={Styles.checkbox + " form-check-input"}
                      type="checkbox"
                      name="floor"
                      value="second"
                      id="flexCheckChecked"
                      onChange={(e) =>
                        formik.setFieldValue("floor", e.target.value)
                      }
                      checked={formik.values.floor === "second"}
                    />
                    <label class="form-check-label text-white">Second</label>
                  </div>
                </div>
                {formik.touched.floor && formik.errors.floor ? (
                  <div className="text-danger fs-6">{formik.errors.floor}</div>
                ) : null}
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
              <button
                style={formState === 3 ? { display: "none" } : null}
                onClick={handlePrevios}
                className={Styles.previousBtn}
              >
                Previous
              </button>
            ) : null}
            {/* {formState === 2 ? (
              <button
                type="submit"
                onClick={handleData}
                className={Styles.nextBtn}
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => setFormState(formState + 1)}
                className={Styles.nextBtn}
              >
                Next
              </button>
            )} */}
            <button
              style={formState === 3 ? { display: "none" } : null}
              onClick={() => {
                if (formState === 2) {
                  formik.handleSubmit();
                  setLoader(true);
                } else {
                  setFormState(formState + 1);
                }
              }}
              className={Styles.nextBtn}
            >
              {formState === 2 ? "Submit" : "Next"}
            </button>
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

import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import Styles from "./FranchiseEnquiry.module.css";
import * as Yup from "yup";
import { useState } from "react";
import { personalDetailsService } from "../../Services/ApiServices";

export default function FranchisePersonal(props) {
  console.log(props, "===");
  const [personalDetails, setPersonalDetails] = useState([]);

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
      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      console.log(values);
      personalDetailsService();
    },
  });

  const colorHandle = () => {
    document.getElementById("name").style.borderBottom = "1px solid #ff7b26";
  };

  // console.log(personalDetails, "=====");

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="d-flex">
        <div className="w-50">
          <label className="text-white">Name*</label>
          <div
            className={Styles.inputContainer}
            id="name"
            onClick={colorHandle}
          >
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
            <div className="text-danger fs-6">{formik.errors.experience}</div>
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
              <label className={Styles.radioLabel + " text-white"} for="age1">
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
              <div className="text-danger fs-6">{formik.errors.gender}</div>
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
            <div className="text-danger fs-6">{formik.errors.nationality}</div>
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
              <div className="text-danger fs-6">{formik.errors.mobile}</div>
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
            <div className="text-danger fs-6">{formik.errors.address}</div>
          ) : null}
        </div>
      </div>
      <div className="text-center mt-5">
        <button type="submit" className={Styles.nextBtn}>
          Next
        </button>
      </div>
    </form>
  );
}

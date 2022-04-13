import React from "react";
import Styles from "./Signup.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import signupImg from "../../Assets/signup.svg";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function SignUp() {
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      mblNumber: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      mblNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values, "===values");
    },
  });

  return (
    <div>
      <div className={Styles.bgContainer + " container-fluid"}>
        <div className={Styles.leftBg}></div>
        <div className={Styles.rightBg}></div>
        <div className={Styles.bottomLeft}></div>
        <div className={Styles.bottomRight}></div>
        <div className={Styles.bg}></div>
        <div className={Styles.loginContainer}>
          <div className={Styles.loginLeftContainer}>
            <img className={Styles.loginImg} src={signupImg} alt="login" />
          </div>

          <div className={Styles.loginRightContainer}>
            <div>
              <h3 className="kstoreFont">
                Welcome to <span className="orange">KStore</span>{" "}
              </h3>
              <p className={Styles.loginRightPara + " fw-bold"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                enim volutpat integer consectetur libero viverra.
              </p>
              <form onSubmit={handleSubmit}>
                <div className={Styles.labelName + " mt-4"}>
                  <label>Name</label>
                  <div className={Styles.inputContainer}>
                    <input
                      className={Styles.emailInput}
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      placeholder="santhosh"
                    />
                  </div>
                </div>
                {touched.name && errors.name ? (
                  <div className={Styles.errorMsg + " text-danger"}>
                    {errors.name}
                  </div>
                ) : null}
                <div className={Styles.labelName + " mt-3"}>
                  <label>Email</label>
                  <div className={Styles.inputContainer}>
                    <input
                      className={Styles.emailInput}
                      type="text"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="santhosh@gmail.com"
                    />
                  </div>
                </div>
                {touched.email && errors.email ? (
                  <div className={Styles.errorMsg + " text-danger"}>
                    {errors.email}
                  </div>
                ) : null}

                <div className={Styles.labelName + " mt-3"}>
                  <label>Phone Number</label>
                  <div className={Styles.inputContainer}>
                    <input
                      className={Styles.emailInput}
                      type="text"
                      name="mblNumber"
                      onChange={handleChange}
                      value={values.mblNumber}
                      placeholder="+91 7448650426"
                    />
                  </div>
                </div>
                {touched.mblNumber && errors.mblNumber ? (
                  <div className={Styles.errorMsg + " text-danger"}>
                    {errors.mblNumber}
                  </div>
                ) : null}

                <div className={Styles.labelName + " mt-3"}>
                  <label>Address</label>
                  <div className={Styles.inputContainer}>
                    <input
                      className={Styles.emailInput}
                      type="text"
                      name="address"
                      onChange={handleChange}
                      value={values.address}
                      placeholder="tirupur 641-602"
                    />
                  </div>
                </div>
                {touched.address && errors.address ? (
                  <div className={Styles.errorMsg + " text-danger"}>
                    {errors.address}
                  </div>
                ) : null}
                <div className="text-center">
                  <button type="submit" className={Styles.loginBtn + " mt-4"}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

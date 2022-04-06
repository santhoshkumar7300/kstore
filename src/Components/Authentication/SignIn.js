import React, { useState } from "react";
import Styles from "./Auth.module.css";
import visibleImg from "../../Assets/visible.png";
import unvisible from "../../Assets/unvisible.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
function SignIn() {
  const [visible, setVisible] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values, "===values");
    },
  });

  return (
    <div>
      <div className={Styles.loginRightContainer}>
        <div>
          <h3 className="kstoreFont">
            Login to <span className="orange">KStore</span>{" "}
          </h3>
          <p className={Styles.loginRightPara + " w-75 fw-bold"}>
            Welcome back! login with your data that you entered during
            registration
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label>Email</label>
              <div className={Styles.inputContainer}>
                <input
                  className={Styles.emailInput}
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Enter Email"
                />
              </div>
            </div>
            {touched.email && errors.email ? (
              <div className={Styles.errorMsg + " text-danger"}>
                {errors.email}
              </div>
            ) : null}
            <div className="mt-4">
              <label>Password</label>
              <div className={Styles.inputContainer}>
                <input
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  className={Styles.passwordInput}
                  placeholder="Enter Password"
                  type={visible ? "text" : "password"}
                />

                <img
                  onClick={() => setVisible(!visible)}
                  className={Styles.visibleImg}
                  src={visible ? visibleImg : unvisible}
                />
              </div>
            </div>
            {touched.password && errors.password ? (
              <div className={Styles.errorMsg + " text-danger"}>
                {errors.password}
              </div>
            ) : null}

            <button type="submit" className={Styles.loginBtn + " mt-4"}>
              Login
            </button>
          </form>
        </div>
        <div className={Styles.forgotpasswordContainer}>
          <Link className={Styles.forgotPassword} to="/store">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

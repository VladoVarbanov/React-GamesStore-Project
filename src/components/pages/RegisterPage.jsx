import { useState } from "react";
import Footer from "../Footer.jsx";
import NavBar from "../NavBar.jsx";
import { singUp } from "../../services/firebaseGamesDB.jsx";

export default function RegisterPage(props) {
  const [options, setOptions] = useState("option1");
  const [err, setErr] = useState({
    usernameError: false,
    emailError: "",
    passwordError: false,
    confirmPasswordError: false,
  });
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (values.username.length < 3) {
      setErr((err) => ({ ...err, usernameError: true }));
    } else {
      setErr((err) => ({ ...err, usernameError: false }));
    }

    if (values.password.length < 8) {
      setErr((err) => ({ ...err, passwordError: true }));
    } else {
      setErr((err) => ({ ...err, passwordError: false }));
    }

    if (values.confirmPassword !== values.password) {
      setErr((err) => ({ ...err, confirmPasswordError: true }));
    } else {
      setErr((err) => ({ ...err, confirmPasswordError: false }));
    }

    singUp(values);
  };

  let activePage = "register";

  return (
    <>
      <NavBar activePage={activePage} />
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Rgistration</h3>
              <span className="breadcrumb">
                {/* <Link to="/">Home</Link> {">"} Shop */}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="d-flex justify-content-center align-items-center m-5 px-15 ">
        <div className="container col-sm-2">
          <form onSubmit={onSubmit}>
            <div className="">
              <fieldset className="row mb-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="option1"
                    value={options}
                    onChange={(e) => setOptions(e.target.id)}
                    defaultChecked
                  />
                  <label htmlFor="option1" className="form-check-label">
                    Company
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="option2"
                    value={options}
                    onChange={(e) => setOptions(e.target.id)}
                  />
                  <label htmlFor="option2" className="form-check-label">
                    Person
                  </label>
                </div>
              </fieldset>
              {/* Username / Company Name*/}
              <div className="row mb-4">
                <label className="col-sm-8 col-form-label">
                  {options === "option1" ? "Company Name" : "Username"}
                </label>
                <div className="col-sm-15">
                  <input
                    type="text"
                    className={`form-control ${
                      err.usernameError ? "is-invalid" : ""
                    }`}
                    id="companyName"
                    name="username"
                    placeholder="Type your username"
                    value={values.username}
                    onChange={onChangeHandler}
                    required
                  />
                  <div
                    id="validationServerUsernameFeedback"
                    className="invalid-feedback"
                  >
                    Please choose a username.
                  </div>
                </div>
              </div>
              {/* Email  */}
              <div className="row mb-4 ">
                <label className="col-sm-8 col-form-label">Email</label>
                <div className="col-sm-15">
                  <input
                    type="email"
                    className="form-control "
                    id="email"
                    name="email"
                    placeholder="Type your email"
                    value={values.email}
                    onChange={onChangeHandler}
                    required
                  />
                </div>
              </div>
              {/* Password  */}
              <div className="row mb-4 ">
                <label className="col-sm-8 col-form-label">Password</label>
                <div className="col-sm-15">
                  <input
                    type="password"
                    className={`form-control ${
                      err.passwordError ? "is-invalid" : ""
                    }`}
                    id="password"
                    name="password"
                    placeholder="Type your password"
                    value={values.password}
                    onChange={onChangeHandler}
                    required
                  />
                  <div
                    id="validationServerUsernameFeedback"
                    className="invalid-feedback"
                  >
                    Must be at least 8 characters long!
                  </div>
                </div>
              </div>
              {/* Confirm Password  */}
              <div className="row mb-4 ">
                <label className="col-sm-8 col-form-label">
                  Confirm Password
                </label>
                <div className="col-sm-15">
                  <input
                    type="password"
                    className={`form-control ${
                      err.confirmPasswordError ? "is-invalid" : ""
                    }`}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={values.confirmPassword}
                    onChange={onChangeHandler}
                    required
                  />
                  <div
                    id="validationServerUsernameFeedback"
                    className="invalid-feedback"
                  >
                    Password doesn't match!
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary col-sm-4">
                  SIGN UP
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

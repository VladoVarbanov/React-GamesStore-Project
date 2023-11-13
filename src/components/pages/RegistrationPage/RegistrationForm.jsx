import { useContext } from "react";
import { SubmitContext } from "../../../contexts/SubmitContext.jsx";
import { Link } from "react-router-dom";

export default function RegistrationForm(props) {
  const { options, err, values, onChangeHandler, onSubmit } =
    useContext(SubmitContext);
  return (
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
              <button type="submit" className="btn btn-primary col-sm-5">
                SIGN UP
              </button>
            </div>
          </div>
        </form>
        <p className="d-flex justify-content-center pt-4">OR</p>

        <Link to="/login" className="d-flex justify-content-center pt-4">
          <button className="btn btn-success col-sm-5">SIGN IN</button>
        </Link>
      </div>
    </div>
  );
}

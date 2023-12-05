import { useContext } from "react";
import { SubmitContext } from "../../../contexts/SubmitContext.jsx";
import { Link } from "react-router-dom";

export default function LoginForm(params) {
  const { errorPassword, values, onChangeHandler, onSubmit } =
    useContext(SubmitContext);
  return (
    <div className="d-flex justify-content-center align-items-center m-5 px-15 ">
      <div className="container col-sm-2">
        <form onSubmit={onSubmit}>
          <div className="">
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
                    errorPassword.errorPassword ? "is-invalid" : ""
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

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary col-sm-5">
                SIGN IN
              </button>
            </div>
          </div>
        </form>
        <p className="d-flex justify-content-center pt-4">OR</p>

        <Link to="/registration" className="d-flex justify-content-center pt-4">
          <button className="btn btn-success col-sm-5">SIGN UP</button>
        </Link>
      </div>
    </div>
  );
}

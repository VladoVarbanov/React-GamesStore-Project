import { useState } from "react";
import { SubmitContext } from "../../contexts/SubmitContext.jsx";
import NavBar from "../NavBar.jsx";
import RegistrationForm from "../RegistrationForm.jsx";
import Footer from "../Footer.jsx";
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
  const SubmitValue = {
    options,
    err,
    values,
    onChangeHandler,
    onSubmit,
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
      <SubmitContext.Provider value={SubmitValue}>
        {/* FORM */}
        <RegistrationForm />
      </SubmitContext.Provider>

      <Footer />
    </>
  );
}

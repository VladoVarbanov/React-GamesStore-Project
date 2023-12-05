import { useEffect, useState } from "react";
import { SubmitContext } from "../../contexts/SubmitContext.jsx";
import NavBar from "../NavBar.jsx";
import RegistrationForm from "./RegistrationPage/RegistrationForm.jsx";
import Footer from "../Footer.jsx";
import { singUp } from "../../services/firebaseGamesDB.jsx";
import { useNavigate } from "react-router-dom";

export default function RegisterPage(props) {
  const [options, setOptions] = useState("option1");
  const [err, setErr] = useState({
    usernameError: false,
    emailError: true,
    passwordError: true,
    confirmPasswordError: true,
  });
  const [errorFirebase, setErrorFirebase] = useState(true);
  const firebaseError = (err) => {
    setErrorFirebase(() => ({ ...err, errorFirebase: err }));
  };

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (
      err.usernameError &&
      err.emailError &&
      err.passwordError &&
      err.confirmPasswordError &&
      !errorFirebase.errorFirebase
    ) {
      navigate("/");
    }
  }, [errorFirebase]);

  const navigate = useNavigate();

  const radioButtons = (id) => {
    setOptions(id);
  };

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (values.username.length < 3) {
      setErr((err) => ({ ...err, usernameError: false }));
    } else {
      setErr((err) => ({ ...err, usernameError: true }));
    }

    if (values.password.length < 8) {
      setErr((err) => ({ ...err, passwordError: false }));
    } else {
      setErr((err) => ({ ...err, passwordError: true }));
    }

    if (values.confirmPassword !== values.password) {
      setErr((err) => ({ ...err, confirmPasswordError: false }));
    } else {
      setErr((err) => ({ ...err, confirmPasswordError: true }));
    }

    singUp(values, firebaseError);
  };
  const SubmitValue = {
    options,
    err,
    values,
    onChangeHandler,
    onSubmit,
    radioButtons,
  };
  let activePage = "register";

  return (
    <>
      <NavBar activePage={activePage} />
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Registration</h3>
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

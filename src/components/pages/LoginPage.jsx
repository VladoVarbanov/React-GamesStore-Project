import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import LoginForm from "./LoginPage/LoginForm.jsx";
import { useState } from "react";
import { SubmitContext } from "../../contexts/SubmitContext.jsx";
import { singIn } from "../../services/firebaseGamesDB.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginPage(params) {
  const [err, setErr] = useState({
    passwordError: false,
  });

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (values.password.length < 8) {
      setErr((err) => ({ ...err, passwordError: true }));
    } else {
      setErr((err) => ({ ...err, passwordError: false }));
    }

    singIn(values);
    navigate("/");
  };
  const SubmitValue = {
    err,
    values,
    onChangeHandler,
    onSubmit,
  };
  let activePage = "register";
  return (
    <>
      <NavBar />
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Login</h3>
              <span className="breadcrumb">
                {/* <Link to="/">Home</Link> {">"} Shop */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <SubmitContext.Provider value={SubmitValue}>
        <LoginForm />
      </SubmitContext.Provider>
      <Footer />
    </>
  );
}

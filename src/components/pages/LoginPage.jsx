import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import LoginForm from "./LoginPage/LoginForm.jsx";
import { useEffect, useState } from "react";
import { SubmitContext } from "../../contexts/SubmitContext.jsx";
import { singIn } from "../../services/firebaseGamesDB.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginPage(params) {
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorFirebase, setErrorFirebase] = useState(false);
  const firebaseError = (err) => {
    setErrorFirebase(() => ({ ...err, errorFirebase: err }));
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (errorPassword && errorFirebase) {
      navigate("/");
    }
  }, [errorFirebase]);

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (values.password.length < 8) {
      setErrorPassword((err) => ({ ...err, errorPassword: true }));
    } else {
      setErrorPassword((err) => ({ ...err, errorPassword: false }));
    }

    singIn(values, firebaseError);
  };
  const SubmitValue = {
    errorPassword,
    values,
    onChangeHandler,
    onSubmit,
  };
  let activePage = "login";
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

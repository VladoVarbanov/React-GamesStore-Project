import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import LoginForm from "./LoginPage/LoginForm.jsx";

export default function LoginPage(params) {
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
      {/* <SubmitContext.Provider value={SubmitValue}>
        <LoginForm />
      </SubmitContext.Provider> */}
      <Footer />
    </>
  );
}

import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import SellForm from "./SellPage/SellForm.jsx";

export default function SellPage(props) {
  let activePage = "sell";
  window.scrollTo(0, 0);
  return (
    <>
      <NavBar activePage={activePage} />
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Sell your Game</h3>
              <span className="breadcrumb">
                {/* <Link to="/">Home</Link> {">"} Shop */}
              </span>
            </div>
          </div>
        </div>
      </div>

      <SellForm />
      <Footer />
    </>
  );
}

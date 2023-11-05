import Footer from "../Footer.jsx";
import NavBar from "../NavBar.jsx";
import MoreProductInfo from "../MoreProductInfo.jsx";
import RelatedGames from "../RelatedGames.jsx";
import SingleProductSection from "../SingleProductSection.jsx";
import { Link } from "react-router-dom";

export default function ProductDetails(props) {
  let activePage = "details";

  return (
    <>
      <NavBar activePage={activePage} />

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Modern Warfare® II</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> {">"} <Link to="/catalog">Shop</Link>{" "}
                {">"} Assasin Creed
              </span>
            </div>
          </div>
        </div>
      </div>

      <SingleProductSection />

      <MoreProductInfo />

      <RelatedGames />

      <Footer />
    </>
  );
}

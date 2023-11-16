import { useContext } from "react";
import Footer from "../Footer.jsx";
import NavBar from "../NavBar.jsx";
import MoreProductInfo from "./ProductDetailsPage/MoreProductInfo.jsx";
import RelatedGames from "./ProductDetailsPage/RelatedGames.jsx";
import SingleProductSection from "./ProductDetailsPage/SingleProductSection.jsx";
import { Link } from "react-router-dom";
import { gameDetails } from "../../services/firebaseGamesDB.jsx";

export default function ProductDetails({ id }) {
  let activePage = "details";

  const game = gameDetails(id);
  console.log(game);

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

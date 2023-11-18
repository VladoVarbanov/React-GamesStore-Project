import { useContext, useEffect, useState } from "react";
import Footer from "../Footer.jsx";
import NavBar from "../NavBar.jsx";
import MoreProductInfo from "./ProductDetailsPage/MoreProductInfo.jsx";
import RelatedGames from "./ProductDetailsPage/RelatedGames.jsx";
import SingleProductSection from "./ProductDetailsPage/SingleProductSection.jsx";
import { Link } from "react-router-dom";
import { GameContext } from "../../contexts/GamesContext.jsx";

export default function ProductDetails() {
  let activePage = "details";

  const { id, game } = useContext(GameContext);

  return (
    <>
      <NavBar activePage={activePage} />

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>{game.gameTitle}</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> {">"} <Link to="/shop">Shop</Link>{" "}
                {">"} {game.gameTitle}
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

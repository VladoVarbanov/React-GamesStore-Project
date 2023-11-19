import { useContext, useEffect, useState } from "react";
import Footer from "../Footer.jsx";
import NavBar from "../NavBar.jsx";
import MoreProductInfo from "./GameDetailsPage/MoreProductInfo.jsx";
import RelatedGames from "./GameDetailsPage/RelatedGames.jsx";
import SingleProductSection from "./GameDetailsPage/SingleProductSection.jsx";
import { Link, useParams } from "react-router-dom";
import { gameDetails } from "../../services/firebaseGamesDB.jsx";
import { GameContext } from "../../contexts/GamesContext.jsx";

export default function ProductDetails() {
  const { gameId } = useParams();
  let activePage = "details";
  const game = gameDetails(gameId);
  const gameInfo = {
    gameId,
    game,
  };
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
      <GameContext.Provider value={gameInfo}>
        <SingleProductSection />

        <MoreProductInfo />

        <RelatedGames />
      </GameContext.Provider>

      <Footer />
    </>
  );
}

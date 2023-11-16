import { Link } from "react-router-dom";
import Footer from "../Footer.jsx";
import NavBar from "../NavBar.jsx";
import ShopStocks from "./CatalogPage/ShopStocks.jsx";
import { GamesContext } from "../../contexts/GamesContext.jsx";
import { allGames, gameDetails } from "../../services/firebaseGamesDB.jsx";
import { useState } from "react";

export default function CatalogPage(props) {
  const [gameId, setGameId] = useState("");
  let activePage = "shop";
  const games = allGames();

  return (
    <>
      <NavBar activePage={activePage} />

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Shop</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> {">"} Shop
              </span>
            </div>
          </div>
        </div>
      </div>
      <GamesContext.Provider value={games}>
        <ShopStocks />
      </GamesContext.Provider>

      <Footer />
    </>
  );
}

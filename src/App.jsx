import { Route, Routes } from "react-router-dom";

import MainPage from "./components/pages/MainPage.jsx";
import CatalogPage from "./components/pages/CatalogPage.jsx";
import ProductDetails from "./components/pages/ProductDetailsPage.jsx";
import RegisterPage from "./components/pages/RegistrationPage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import SellPage from "./components/pages/SellPage.jsx";
import { GamesContext, GameContext } from "./contexts/GamesContext.jsx";
import { useEffect, useState } from "react";
import { allGames, gameDetails } from "./services/firebaseGamesDB.jsx";

function App() {
  const [id, setId] = useState("");
  let gameId = "";
  const setGameId = (id) => {
    setId(id);
    gameId = id;
  };

  const game = gameDetails(id);
  const games = allGames();
  const gameData = {
    id,
    game,
  };
  const gamesData = {
    games,
    setGameId,
  };
  return (
    <>
      {/* <!-- ***** Preloader Start ***** --> */}

      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* <!-- ***** Preloader End ***** --> */}
      <Routes>
        <Route
          path="/"
          element={
            <GamesContext.Provider value={gamesData}>
              <MainPage />
            </GamesContext.Provider>
          }
        />
        <Route
          path="/shop"
          element={
            <GamesContext.Provider value={gamesData}>
              <CatalogPage />
            </GamesContext.Provider>
          }
        />
        <Route
          path="/product-details"
          element={
            <GameContext.Provider value={gameData}>
              <ProductDetails />
            </GameContext.Provider>
          }
        />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sell" element={<SellPage />} />
      </Routes>
    </>
  );
}

export default App;

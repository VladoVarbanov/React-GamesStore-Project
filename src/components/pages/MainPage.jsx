import { initializeFirebase } from "../../services/firebaseConfigDB.js";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import CallToAction from "../CallToAction";
import Categories from "../Categories.jsx";
import Footer from "../Footer.jsx";
import Futures from "../Futures.jsx";
import NavBar from "../NavBar.jsx";
import MainBanner from "../MainBanner.jsx";
import TopGames from "../TopGames.jsx";
import Trending from "../Trending.jsx";
import { CompaniesContext } from "../../contexts/CompaniesContext.jsx";
import { allCompanies } from "../../services/firebaseCompaniesDB.jsx";
import { useState, useEffect } from "react";

export default function MainPage(props) {
  const [games, setGames] = useState([]);

  // init services
  const db = getFirestore();

  // collection ref
  const colRef = collection(db, "companies");

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const colRef = collection(db, "companies");
      const snapshot = await getDocs(colRef);
      const gamesRef = snapshot.docs.map((game) => ({
        ...game.data(),
        id: game.id,
      }));
      setGames(gamesRef);
    };

    fetchData();
  }, []);

  const contextValue = {
    allCompanies,
  };
  return (
    <>
      {/* <!-- ***** Header Area Start ***** --> */}
      <NavBar />
      {/* <!-- ***** Header Area End ***** --> */}
      <CompaniesContext.Provider value={games}>
        <MainBanner />

        <Futures />

        <Trending />

        <TopGames />

        <Categories />

        <CallToAction />
      </CompaniesContext.Provider>

      <Footer />
    </>
  );
}

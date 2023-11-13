import CallToAction from "./MainPage/CallToAction.jsx";
import Categories from "./MainPage/Categories.jsx";
import Footer from "../Footer.jsx";
import Futures from "./MainPage/Futures.jsx";
import NavBar from "../NavBar.jsx";
import MainBanner from "./MainPage/MainBanner.jsx";
import TopGames from "./MainPage/TopGames.jsx";
import Trending from "./MainPage/Trending.jsx";
import { GamesContext } from "../../contexts/GamesContext.jsx";
import { allGames } from "../../services/firebaseGamesDB.jsx";

export default function MainPage(props) {
  let activePage = "home";

  return (
    <>
      {/* <!-- ***** Header Area Start ***** --> */}
      <NavBar activePage={activePage} />
      {/* <!-- ***** Header Area End ***** --> */}
      <GamesContext.Provider value={allGames()}>
        <MainBanner />

        <Futures />

        <Trending />

        <TopGames />

        <Categories />

        {/* <CallToAction /> */}
      </GamesContext.Provider>

      <Footer />
    </>
  );
}

import CallToAction from "./MainPage/CallToAction.jsx";
import Categories from "./MainPage/Categories.jsx";
import Footer from "../Footer.jsx";
import Futures from "./MainPage/Futures.jsx";
import NavBar from "../NavBar.jsx";
import MainBanner from "./MainPage/MainBanner.jsx";
import TopGames from "./MainPage/TopGames.jsx";
import Trending from "./MainPage/Trending.jsx";

export default function MainPage(props) {
  let activePage = "home";

  return (
    <>
      {/* <!-- ***** Header Area Start ***** --> */}
      <NavBar activePage={activePage} />
      {/* <!-- ***** Header Area End ***** --> */}
      <MainBanner />

      {/* <Futures /> */}

      <Trending />

      <TopGames />

      <Categories />

      {/* <CallToAction /> */}

      <Footer />
    </>
  );
}

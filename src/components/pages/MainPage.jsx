import CallToAction from "../CallToAction";
import Categories from "../Categories.jsx";
import Footer from "../Footer.jsx";
import Futures from "../Futures.jsx";
import NavBar from "../NavBar.jsx";
import MainBanner from "../MainBanner.jsx";
import TopGames from "../TopGames.jsx";
import Trending from "../Trending.jsx";

export default function MainPage(props) {
  return (
    <>
      {/* <!-- ***** Header Area Start ***** --> */}
      <NavBar />
      {/* <!-- ***** Header Area End ***** --> */}

      <MainBanner />

      <Futures />

      <Trending />

      <TopGames />

      <Categories />

      <CallToAction />

      <Footer />
    </>
  );
}

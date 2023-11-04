import CallToAction from "../CallToAction";
import Categories from "../Categories.jsx";
import Footer from "../Footer.jsx";
import Futures from "../Futures.jsx";
import Header from "../Header.jsx";
import MainBanner from "../MainBanner.jsx";
import TopGames from "../TopGames.jsx";
import Trending from "../Trending.jsx";

export default function MainPage(props) {
  return (
    <>
      {/* <!-- ***** Header Area Start ***** --> */}
      <Header />
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

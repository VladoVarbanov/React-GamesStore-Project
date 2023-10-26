import CallToAction from "./components/CallToAction.jsx";
import Categories from "./components/Categories.jsx";
import Footer from "./components/Footer.jsx";
import Futures from "./components/Futures.jsx";
import Header from "./components/Header.jsx";
import MainBanner from "./components/MainBanner.jsx";
import TopGames from "./components/TopGames.jsx";
import Trending from "./components/Trending.jsx";

function App() {
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

export default App;

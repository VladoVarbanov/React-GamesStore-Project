import { Link } from "react-router-dom";
import Footer from "../Footer.jsx";
import NavBar from "../NavBar.jsx";
import ShopStocks from "../ShopStocks.jsx";
import { GamesContext } from "../../contexts/GamesContext.jsx";
import { allGames } from "../../services/firebaseGamesDB.jsx";

export default function CatalogPage(props) {
  let activePage = "shop";

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
      <GamesContext.Provider value={allGames()}>
        <ShopStocks />
      </GamesContext.Provider>

      <Footer />
    </>
  );
}

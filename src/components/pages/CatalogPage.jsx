import { Link } from "react-router-dom";
import Footer from "../Footer.jsx";
import NavBar from "../NavBar.jsx";
import ShopStocks from "./CatalogPage/ShopStocks.jsx";
export default function CatalogPage(props) {
  let activePage = "catalog";
  window.scrollTo(0, 0);
  return (
    <>
      <NavBar activePage={activePage} />

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Game Catalog</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> {">"} Catalog
              </span>
            </div>
          </div>
        </div>
      </div>
      <ShopStocks />

      <Footer />
    </>
  );
}

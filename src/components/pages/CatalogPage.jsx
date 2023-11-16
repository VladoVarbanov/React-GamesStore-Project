import { Link } from "react-router-dom";
import Footer from "../Footer.jsx";
import NavBar from "../NavBar.jsx";
import ShopStocks from "./CatalogPage/ShopStocks.jsx";
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
      <ShopStocks />

      <Footer />
    </>
  );
}

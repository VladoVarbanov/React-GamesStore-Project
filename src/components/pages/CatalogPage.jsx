import { Link } from "react-router-dom";
import Footer from "../Footer.jsx";
import NavBar from "../NavBar.jsx";
import ShopStocks from "../ShopStocks.jsx";

export default function CatalogPage(props) {
  return (
    <>
      <NavBar />

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Our Shop</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> {">"} Our Shop
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

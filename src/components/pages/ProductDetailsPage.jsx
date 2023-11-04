import Footer from "../Footer.jsx";
import NavBar from "../NavBar.jsx";
import MoreProductInfo from "../MoreProductInfo.jsx";
import RelatedGames from "../RelatedGames.jsx";
import SingleProductSection from "../SingleProductSection.jsx";

export default function ProductDetails(props) {
  return (
    <>
      <NavBar />

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Modern Warfare® II</h3>
              <span className="breadcrumb">
                <a href="#">Home</a> {">"} <a href="#">Shop</a> {">"} Assasin
                Creed
              </span>
            </div>
          </div>
        </div>
      </div>

      <SingleProductSection />

      <MoreProductInfo />

      <RelatedGames />

      <Footer />
    </>
  );
}

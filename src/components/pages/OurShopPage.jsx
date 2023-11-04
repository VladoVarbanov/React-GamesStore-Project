import Footer from "../Footer.jsx";
import Header from "../Header.jsx";

export default function OurShopPage(props) {
  return (
    <>
      <Header />

      <div class="page-heading header-text">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3>Our Shop</h3>
              <span class="breadcrumb">
                <a href="#">Home</a> Our Shop
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

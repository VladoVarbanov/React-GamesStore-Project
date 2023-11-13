import { Route, Routes } from "react-router-dom";

import MainPage from "./components/pages/MainPage.jsx";
import CatalogPage from "./components/pages/CatalogPage.jsx";
import ProductDetails from "./components/pages/ProductDetailsPage.jsx";
import RegisterPage from "./components/pages/RegisterPage.jsx";

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
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<CatalogPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;

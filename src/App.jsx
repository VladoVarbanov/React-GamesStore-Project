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

      <div className="section categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Categories</h6>
                <h2>Top Categories</h2>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="/images/categories-01.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="/images/categories-05.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="/images/categories-03.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="/images/categories-04.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg col-sm-6 col-xs-12">
              <div className="item">
                <h4>Action</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src="/images/categories-05.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="shop">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <h6>Our Shop</h6>
                      <h2>
                        Go Pre-Order Buy & Get Best <em>Prices</em> For You!
                      </h2>
                    </div>
                    <p>
                      Lorem ipsum dolor consectetur adipiscing, sed do eiusmod
                      tempor incididunt.
                    </p>
                    <div className="main-button">
                      <a href="shop.html">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2 align-self-end">
              <div className="subscribe">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <h6>NEWSLETTER</h6>
                      <h2>
                        Get Up To $100 Off Just Buy <em>Subscribe</em>{" "}
                        Newsletter!
                      </h2>
                    </div>
                    <div className="search-input">
                      <form id="subscribe" action="#">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Your email..."
                        />
                        <button type="submit">Subscribe Now</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>
              Copyright © 2048 LUGX Gaming Company. All rights reserved.
              &nbsp;&nbsp;{" "}
              <a rel="nofollow" href="https://templatemo.com" target="_blank">
                Design: TemplateMo
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

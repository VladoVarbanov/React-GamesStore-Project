export default function CallToAction(props) {
  return (
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
                      Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!
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
  );
}

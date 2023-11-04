import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* <!-- ***** Logo Start ***** --> */}
              <Link to="/" className="logo">
                <img src="/images/logo.png" alt="" style={{ width: "158px" }} />
              </Link>
              {/* <!-- ***** Logo End ***** --> */}
              {/* <!-- ***** Menu Start ***** --> */}
              <ul className="nav">
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/catalog">Our Shop</Link>
                </li>
                <li>
                  <Link to="/product-details">Product Details</Link>
                </li>
                <li>
                  <a href="product-details.html">Meet the Indies</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="#">Sign In</a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* <!-- ***** Menu End ***** --> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header({ activePage }) {
  let page = "";
  if (activePage === "home") {
    page = "home";
  } else if (activePage === "shop") {
    page = "shop";
  } else if (activePage === "details") {
    page = "details";
  }
  const [activeTab, setActiveTab] = useState(page);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
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
                  <Link
                    to="/"
                    className={activeTab === "home" ? "active" : ""}
                    onClick={() => handleTabClick("home")}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className={activeTab === "shop" ? "active" : ""}
                    onClick={() => handleTabClick("shop")}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product-details"
                    className={activeTab === "details" ? "active" : ""}
                    onClick={() => handleTabClick("details")}
                  >
                    Product Details
                  </Link>
                </li>
                <li>
                  <a href="product-details.html">Meet the Indies</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <Link
                    to="/register"
                    className={activeTab === "details" ? "active" : ""}
                    onClick={() => handleTabClick("details")}
                  >
                    Sign Up
                  </Link>
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

import { Link } from "react-router-dom";
import { useState } from "react";
import { logOut } from "../services/firebaseGamesDB.jsx";
import { currentUser } from "../services/firebaseGamesDB.jsx";

export default function Header({ activePage }) {
  let page = "";
  if (activePage === "home") {
    page = "home";
  } else if (activePage === "shop") {
    page = "shop";
  } else if (activePage === "details") {
    page = "details";
  } else if (activePage === "sell") {
    page = "sell";
  }
  const [activeTab, setActiveTab] = useState(page);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const signOut = () => {
    logOut();
  };
  const user = currentUser();
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
                    to="/sell"
                    className={activeTab === "sell" ? "active" : ""}
                    onClick={() => handleTabClick("sell")}
                  >
                    Sell Game
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
                {/* <li>
                  <a href="product-details.html">Meet the Indies</a>
                </li> */}
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>

                {user ? (
                  <li>
                    <Link href="contact.html">{user.displayName}</Link>
                  </li>
                ) : (
                  ""
                )}
                {user === "" ? (
                  <li>
                    <Link
                      to="/login"
                      className={activeTab === "details" ? "active" : ""}
                      onClick={() => handleTabClick("details")}
                    >
                      Sign In
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link onClick={signOut}>SIGN OUT</Link>
                  </li>
                )}
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

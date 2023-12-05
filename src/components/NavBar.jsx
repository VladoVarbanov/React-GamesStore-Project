import { Link } from "react-router-dom";
import { useState } from "react";
import { logOut } from "../services/firebaseGamesDB.jsx";
import { currentUser } from "../services/firebaseGamesDB.jsx";
import "../../public/css/dropDownMenu.css";

export default function Header({ activePage }) {
  let page = "";
  const [activeTab, setActiveTab] = useState(page);
  const [showMenu, setShowMenu] = useState(false);
  if (activePage === "home") {
    page = "home";
  } else if (activePage === "catalog") {
    page = "catalog";
  } else if (activePage === "details") {
    page = "details";
  } else if (activePage === "sell") {
    page = "sell";
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const signOut = () => {
    logOut();
  };
  const user = currentUser();
  const toggleMenu = () => {
    console.log("Toggle menu On");
    setShowMenu(!showMenu);
  };
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* <!-- ***** Logo Start ***** --> */}

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
                    to="/catalog"
                    className={activeTab === "catalog" ? "active" : ""}
                    onClick={() => handleTabClick("catalog")}
                  >
                    Game Catalog
                  </Link>
                </li>
                {user ? (
                  <li>
                    <Link
                      to="/sell"
                      className={activeTab === "sell" ? "active" : ""}
                      onClick={() => handleTabClick("sell")}
                    >
                      Sell Game
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                {activePage === "details" && (
                  <li>
                    <Link
                      to="/game-details"
                      className={activeTab === "details" ? "active" : ""}
                      onClick={() => handleTabClick("details")}
                    >
                      Game Details
                    </Link>
                  </li>
                )}

                {/* <li>
                  <a href="game-details.html">Meet the Indies</a>
                </li> */}

                {/* Contact Us */}
                {/* <li>
                  <a href="contact.html">Contact Us</a>
                </li> */}

                {user ? (
                  <li>
                    <Link>{user.displayName}</Link>
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
              <Link className="menu-trigger" onClick={toggleMenu}>
                <span>Menu</span>
              </Link>
              {showMenu && (
                <div className="dropdown-menu">
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
                      to="/catalog"
                      className={activeTab === "catalog" ? "active" : ""}
                      onClick={() => handleTabClick("catalog")}
                    >
                      Game Catalog
                    </Link>
                  </li>
                  {user ? (
                    <li>
                      <Link
                        to="/sell"
                        className={activeTab === "sell" ? "active" : ""}
                        onClick={() => handleTabClick("sell")}
                      >
                        Sell Game
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}

                  {activePage === "details" && (
                    <li>
                      <Link
                        to="/game-details"
                        className={activeTab === "details" ? "active" : ""}
                        onClick={() => handleTabClick("details")}
                      >
                        Game Details
                      </Link>
                    </li>
                  )}

                  {/* <li>
                  <a href="game-details.html">Meet the Indies</a>
                </li> */}

                  {/* Contact Us */}
                  {/* <li>
                  <a href="contact.html">Contact Us</a>
                </li> */}

                  {user ? (
                    <li>
                      <Link>{user.displayName}</Link>
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
                </div>
              )}
              {/* <!-- ***** Menu End ***** --> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

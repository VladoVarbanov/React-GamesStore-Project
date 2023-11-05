import { useContext } from "react";
import { CompaniesContext } from "../contexts/CompaniesContext.jsx";

export default function TopGames(props) {
  const games = useContext(CompaniesContext);

  return (
    <div className="section most-played">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h6>TOP GAMES</h6>
              <h2>Most Played</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-button">
              <a href="shop.html">View All</a>
            </div>
          </div>

          {games.map((game) => (
            <div className="col-lg-2 col-md-6 col-sm-6" key={game.id}>
              <div className="item">
                <div className="thumb">
                  <a href="product-details.html">
                    <img src={game.imgUrl} alt="" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">{game.genre}</span>
                  <h4>{game.game}</h4>
                  <a href="product-details.html">Explore</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

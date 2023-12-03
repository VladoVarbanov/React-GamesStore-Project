import { useContext } from "react";
import { GamesContext } from "../../../contexts/GamesContext.jsx";
import { Link } from "react-router-dom";

export default function Trending(props) {
  const { games, setGameId } = useContext(GamesContext);

  return (
    <div className="section trending">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h6>Trending</h6>
              <h2>Trending Games</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-button">
              <Link to={"/shop"}>View All</Link>
            </div>
          </div>
          {games.slice(0, 4).map((game) => (
            <div className="col-lg-3 col-md-6" key={game.id}>
              <div className="item">
                <div className="thumb">
                  <Link
                    to={`/game-details/${game.id}`}
                    onClick={async (e) => {
                      setGameId(game.id);
                    }}
                  >
                    <img className="image-container" src={game.imgUrl} alt="" />
                  </Link>
                  <span className="price">
                    <em>${(game.price * 1.2).toFixed(2)}</em>${game.price}
                  </span>
                </div>
                <div className="down-content">
                  <span className="category">{game.genre}</span>
                  <h4>{game.game}</h4>
                  <a href="game-details.html">
                    <i className="fa fa-shopping-bag"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

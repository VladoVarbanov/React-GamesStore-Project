import { useContext } from "react";
import { GamesContext } from "../../../contexts/GamesContext.jsx";
import { Link } from "react-router-dom";

export default function ShopStocks(props) {
  const { games, setGameId } = useContext(GamesContext);

  return (
    <div className="section trending">
      <div className="container">
        <ul className="trending-filter">
          <li>
            <a className="is_active" href="#!" data-filter="*">
              Show All
            </a>
          </li>
          <li>
            <a href="#!" data-filter=".adv">
              Adventure
            </a>
          </li>
          <li>
            <a href="#!" data-filter=".str">
              Strategy
            </a>
          </li>
          <li>
            <a href="#!" data-filter=".rac">
              Racing
            </a>
          </li>
        </ul>
        <div className="row trending-box">
          {games.map((game) => (
            <div
              className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv"
              key={game.id}
            >
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
                  <Link
                    to={`/game-details/${game.id}`}
                    onClick={async (e) => {
                      setGameId(game.id);
                    }}
                  >
                    <i className="fa fa-shopping-bag"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="pagination">
              <li>
                <a href="#"> &lt; </a>
              </li>
              <li>
                <a className="is_active" href="#">
                  1
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#"> &gt; </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

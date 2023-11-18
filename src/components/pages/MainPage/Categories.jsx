import { useContext } from "react";
import { GamesContext } from "../../../contexts/GamesContext.jsx";
import { Link } from "react-router-dom";

export default function Categories(props) {
  const { games, setGameId } = useContext(GamesContext);
  return (
    <div className="section categories">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-heading">
              <h6>Categories</h6>
              <h2>Top Categories</h2>
            </div>
          </div>

          {games.slice(0, 4).map((game) => (
            <div className="col-lg col-sm-6 col-xs-12" key={game.id}>
              <div className="item">
                <h4>{game.genre}</h4>
                <div className="thumb">
                  <Link
                    to={`/product-details`}
                    onClick={async (e) => {
                      setGameId(game.id);
                    }}
                  >
                    <img src={game.imgUrl} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

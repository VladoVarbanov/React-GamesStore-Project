import { useContext } from "react";
import { GamesContext } from "../../../contexts/GamesContext.jsx";

export default function Categories(props) {
  const games = useContext(GamesContext);

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

          {games.map((game) => (
            <div className="col-lg col-sm-6 col-xs-12" key={game.id}>
              <div className="item">
                <h4>{game.genre}</h4>
                <div className="thumb">
                  <a href="product-details.html">
                    <img src={game.imgUrl} alt="" />
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

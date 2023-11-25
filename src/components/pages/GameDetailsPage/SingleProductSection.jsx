import { useContext, useState } from "react";
import { GameContext } from "../../../contexts/GamesContext.jsx";
import { currentUser } from "../../../services/firebaseGamesDB.jsx";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../../../../public/css/rating.css";

export default function SingleProductSection() {
  const { gameId, game } = useContext(GameContext);
  const [ratingStars, setRatingStars] = useState(undefined);
  const [hover, setHover] = useState(null);
  const user = currentUser();
  const navigate = useNavigate();
  let rating = 1.0;

  if (game.rating !== undefined) {
    rating = (
      game.rating.reduce((a, c) => a + c, 0) / game.rating.length
    ).toFixed(2);
  } else {
    rating = 1.0;
  }

  const onEdit = () => {
    navigate(`/edit/${gameId}`);
  };

  return (
    <div className="single-product section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-image">
              <img src={game?.imgUrl} alt="" />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <h4>{game?.gameTitle}</h4>
            <span className="price">
              <em>${(game?.price * 1.2).toFixed(2)}</em> ${game?.price}
            </span>
            <p>{game?.info}</p>
            <form id="qty" action="#">
              {user?.uid !== game?.owner ? (
                <button type="button">
                  <i className="fa fa-shopping-bag"></i> Buy
                </button>
              ) : (
                <div>
                  <button type="button" onClick={onEdit}>
                    <i className="fa fa-shopping-bag"></i> Edit
                  </button>
                  <button type="button" className="mx-5">
                    <i className="fa fa-shopping-bag "></i> Delete
                  </button>
                </div>
              )}
            </form>
            <ul>
              <li>
                <span>Rating</span> {rating}
              </li>
              <li>
                <span>Genre:</span> <a href="#">{game?.genre}</a>
              </li>
              {/* Star rating */}
              <div>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;

                  return (
                    <label key={i} htmlFor="" className="labelStar">
                      <input type="radio" name="rating" value={ratingValue} />
                      <FaStar
                        className="star"
                        color={
                          ratingValue <= (hover || ratingStars)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        size={30}
                        onClick={() => setRatingStars(ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
              {/* <li>
                <span>Multi-tags:</span> <a href="#">War</a>,
                <a href="#">Battle</a>, <a href="#">Royal</a>
              </li> */}
            </ul>
          </div>
          <div className="col-lg-12">
            <div className="sep"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

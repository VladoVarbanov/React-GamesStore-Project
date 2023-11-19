import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../../contexts/GamesContext.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editGame } from "../../../services/firebaseGamesDB.jsx";

export default function EditGameForm(props) {
  const game = useContext(GameContext);
  const { gameId } = useParams();
  const [gameTitle, setGameTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("Select Genre");

  useEffect(() => {
    const setData = () => {
      setGenre(game.genre);
      setGameTitle(game.gameTitle);
      setImgUrl(game.imgUrl);
      setPrice(game.price);
      setInfo(game.info);
      setDescription(game.description);
    };
    setData();
  }, [game]);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    await editGame(gameId, {
      gameTitle,
      imgUrl,
      price,
      info,
      description,
      genre,
    });
    // await addGame({ gameTitle, imgUrl, price, genre });
    navigate(`/game-details/${gameId}`);
  };

  const dropdownChangeHandler = (e) => {
    setGenre(e.target.innerText);
  };
  return (
    <div className="d-flex justify-content-center align-items-center m-5 px-15 ">
      <div className="container col-sm-2">
        <form onSubmit={onSubmit}>
          <div className="">
            {/* Game Title */}
            <div className="row mb-4">
              <label className="col-sm-8 col-form-label" htmlFor="gameTitle">
                Game Title
              </label>
              <div className="col-sm-15">
                <input
                  type="text"
                  className={`form-control`}
                  id="gameTitle"
                  name="gameTitle"
                  placeholder="Enter the Game's Name"
                  value={gameTitle}
                  onChange={(e) => setGameTitle(e.target.value)}
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  Please enter a Game Title.
                </div>
              </div>
            </div>

            {/* Game Image */}
            <div className="row mb-4">
              <label className="col-sm-8 col-form-label" htmlFor="imgUrl">
                Link to Game Image
              </label>
              <div className="col-sm-15">
                <input
                  type="url"
                  className={`form-control`}
                  id="imgUrl"
                  name="imgUrl"
                  placeholder="Enter Game Image Link"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  Please enter a Game Image Link.
                </div>
              </div>
            </div>

            {/* Game Price */}
            <div className="row mb-4">
              <label className="col-sm-8 col-form-label" htmlFor="price">
                Game Price
              </label>
              <div className="col-sm-15">
                <input
                  type="number"
                  className={`form-control`}
                  id="price"
                  name="price"
                  placeholder="Enter Game Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  Please enter a Game Price.
                </div>
              </div>
            </div>

            {/* Game Info */}
            <div className="row mb-4">
              <label className="col-sm-8 col-form-label" htmlFor="gameInfo">
                Game Info
              </label>
              <div className="col-sm-15">
                <textarea
                  type="text"
                  className={`form-control`}
                  id="gameInfo"
                  name="gameInfo"
                  placeholder="Enter Info for the Game"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  Please enter a Game Info.
                </div>
              </div>
            </div>

            {/* Game Description */}
            <div className="row mb-4">
              <label
                className="col-sm-8 col-form-label"
                htmlFor="gameDescription"
              >
                Game Description
              </label>
              <div className="col-sm-15">
                <textarea
                  type="text"
                  className={`form-control`}
                  id="gameDescription"
                  name="gameDescription"
                  placeholder="Enter Description for the Game"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  Please enter a Game Description.
                </div>
              </div>
            </div>

            {/* Game Genre */}
            <div className="d-flex justify-content-center dropdown">
              <Link
                className="btn btn-success dropdown-toggle col-sm-8"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {genre}
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={dropdownChangeHandler}
                  >
                    Action
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={dropdownChangeHandler}
                  >
                    Platform
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={dropdownChangeHandler}
                  >
                    Sandbox
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={dropdownChangeHandler}
                  >
                    Adventure
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={dropdownChangeHandler}
                  >
                    Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={dropdownChangeHandler}
                  >
                    Racing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="d-flex justify-content-center mt-5">
              <button type="submit" className="btn btn-primary col-sm-8">
                Edit Game
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

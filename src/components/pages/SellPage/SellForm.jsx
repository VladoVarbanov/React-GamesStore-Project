import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addGame } from "../../../services/firebaseGamesDB.jsx";

export default function SellForm(props) {
  //   const { options, err, values, onChangeHandler, onSubmit, radioButtons } =
  //     useContext(SubmitContext);
  const [genre, setGenre] = useState("Select Genre");
  const [gameTitle, setGameTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const dropdownChangeHandler = (e) => {
    setGenre(e.target.innerText);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await addGame({ gameTitle, imgUrl, price, genre });
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center align-items-center m-5 px-15 ">
      <div className="container col-sm-2">
        <form onSubmit={onSubmit}>
          <div className="">
            {/* Game Title */}
            <div className="row mb-4">
              <label className="col-sm-8 col-form-label">Game Title</label>
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
              <label className="col-sm-8 col-form-label">
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
              <label className="col-sm-8 col-form-label">Game Price</label>
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
                Add Game
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function SellForm(props) {
  //   const { options, err, values, onChangeHandler, onSubmit, radioButtons } =
  //     useContext(SubmitContext);
  const onSubmit = () => console.log("Ok");
  const [genreOptions, setGenreOptions] = useState("Select Genre");

  const dropdownChangeHandler = (e) => {
    setGenreOptions(e.target.innerText);
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
                  //   value={values.username}
                  //   onChange={onChangeHandler}
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
                  //   value={values.username}
                  //   onChange={onChangeHandler}
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
                  //   value={values.username}
                  //   onChange={onChangeHandler}
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
                className="btn btn-success dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {genreOptions}
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
              <button type="submit" className="btn btn-primary col-sm-5">
                SIGN UP
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useContext } from "react";
import { GameContext } from "../../../contexts/GamesContext.jsx";

export default function MoreProductInfo(props) {
  const { gameId, game } = useContext(GameContext);

  return (
    <div className="more-info">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tabs-content">
              <div className="row">
                <div className="nav-wrapper">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        type="button"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#reviews"
                        type="button"
                        role="tab"
                        aria-controls="reviews"
                        aria-selected="false"
                      >
                        Reviews (3)
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                  >
                    {game.description}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="reviews"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                  >
                    <p>
                      Coloring book air plant shabby chic, crucifix normcore
                      raclette cred swag artisan activated charcoal. PBR&B fanny
                      pack pok pok gentrify truffaut kitsch helvetica jean
                      shorts edison bulb poutine next level humblebrag la croix
                      adaptogen. <br />
                      <br />
                      Hashtag poke literally locavore, beard marfa kogi bruh
                      artisan succulents seitan tonx waistcoat chambray
                      taxidermy. Same cred meggings 3 wolf moon lomo irony cray
                      hell of bitters asymmetrical gluten-free art party raw
                      denim chillwave tousled try-hard succulents street art.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

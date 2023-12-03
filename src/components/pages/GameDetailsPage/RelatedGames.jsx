import { Link } from "react-router-dom";

export default function RelatedGames(props) {
  return (
    <div className="section categories related-games">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h6>Action</h6>
              <h2>Related Games</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-button">
              <Link to="/catalog">View All</Link>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <h4>Action</h4>
              <div className="thumb">
                <a href="game-details.html">
                  <img src="/images/categories-01.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <h4>Action</h4>
              <div className="thumb">
                <a href="game-details.html">
                  <img src="/images/categories-05.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <h4>Action</h4>
              <div className="thumb">
                <a href="game-details.html">
                  <img src="/images/categories-03.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <h4>Action</h4>
              <div className="thumb">
                <a href="game-details.html">
                  <img src="/images/categories-04.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm-6 col-xs-12">
            <div className="item">
              <h4>Action</h4>
              <div className="thumb">
                <a href="game-details.html">
                  <img src="/images/categories-05.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

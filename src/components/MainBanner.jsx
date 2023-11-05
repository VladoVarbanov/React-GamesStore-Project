export default function MainBanner(props) {
  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="caption header-text">
              <h6>Welcome to Indie GameSpot</h6>
              <h2>WHERE COMMUNITY SHAPES THE FUTURE OF INDIE GAMING</h2>
              <p>
                Welcome to Indie GameSpot, the hub for indie gaming innovation!
                Discover a world of creativity and passion as small indie
                companies showcase their unique games. Here, you'll have the
                power to not only purchase their masterpieces but also share
                your voice. Vote for your favorites, write comments, and share
                your experiences. Connect with the talented developers behind
                the games by exploring their stories on our 'Meet the Indies'
                page. Join us in celebrating the spirit of indie gaming and be a
                part of this vibrant community.
              </p>
              <div className="search-input">
                <form id="search" action="#">
                  <input
                    type="text"
                    placeholder="Type Something"
                    id="searchText"
                    name="searchKeyword"
                  />
                  <button role="button">Search Now</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div className="right-image">
              <img src="/images/banner-image.jpg" alt="" />
              <span className="price">$22</span>
              <span className="offer">-40%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

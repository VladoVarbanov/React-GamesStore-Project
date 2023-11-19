import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import { Link, useParams } from "react-router-dom";
import { gameDetails } from "../../services/firebaseGamesDB.jsx";
import EditGameForm from "./EditPage/EditGameForm.jsx";
import { GameContext } from "../../contexts/GamesContext.jsx";

export default function EditPage(props) {
  const { gameId } = useParams();
  const game = gameDetails(gameId);

  return (
    <>
      <NavBar />
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>{game.gameTitle}</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> {">"} <Link to="/shop">Shop</Link>{" "}
                {">"} {game.gameTitle}
              </span>
            </div>
          </div>
        </div>
      </div>
      <GameContext.Provider value={game}>
        <EditGameForm />
      </GameContext.Provider>

      <Footer />
    </>
  );
}

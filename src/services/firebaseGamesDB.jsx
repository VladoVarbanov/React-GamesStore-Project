import { initializeFirebase } from "./firebaseConfigDB.js";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// init services
const db = getFirestore();
const auth = getAuth(initializeFirebase);
export const user = auth.currentUser;

// collection ref
const colRef = collection(db, "games");

// const navigate = useNavigate();

// Take all games from DB.
export const allGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(colRef);
      const gamesRef = snapshot.docs.map((game) => ({
        ...game.data(),
        id: game.id,
      }));
      setGames(gamesRef);
    };

    fetchData();
  }, []);
  return games;
};

// Take one Game.
export const gameDetails = (id) => {
  const [game, setGame] = useState({});
  useEffect(() => {
    const gameInfo = async () => {
      const gameRef = await doc(db, "games", id);
      const gameData = (await getDoc(gameRef)).data();
      setGame(gameData);
    };
    gameInfo();
  }, [id]);
  return game;
};

// Add doc to collection.
export const addGame = ({
  gameTitle,
  imgUrl,
  price,
  info,
  description,
  genre,
}) => {
  addDoc(colRef, {
    gameTitle,
    imgUrl,
    price: Number(price),
    info,
    description,
    genre,
    rating: [],
    owner: auth.currentUser.uid,
  });
};

export const deleteGame = (id) => {
  deleteDoc(doc(db, "games", id));
};

// Edit Game
export const editGame = async (
  id,
  { gameTitle, imgUrl, price, info, description, genre }
) => {
  const gameRef = await doc(db, "games", id);
  const updatedGame = await updateDoc(gameRef, {
    gameTitle,
    imgUrl,
    price,
    info,
    description,
    genre,
  });

  return updatedGame;
};

// Registration
export const singUp = async ({ username, email, password }, firebaseError) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: username });
    firebaseError(false);
  } catch (error) {
    firebaseError(true);
    return console.error("Error logging in:", error);
  }
};

// Login
export const singIn = ({ email, password }, firebaseError) => {
  try {
    signInWithEmailAndPassword(auth, email, password).then((cred) => {
      firebaseError(true);
      return cred.user.email;
    });
  } catch (error) {
    firebaseError(false);
    return console.error("Error logging in:", error);
  }
};

export const logOut = () => {
  signOut(auth);
};

// Current LogIn User.
export const currentUser = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (userDB) => {
      if (userDB) {
        setUser(userDB);
      } else {
        setUser("");
      }
    });
  }, []);
  return user;
};

import { initializeFirebase } from "./firebaseConfigDB.js";
import { useState, useEffect, useContext } from "react";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { UserContext } from "../contexts/SubmitContext.jsx";

// init services
const db = getFirestore();
const auth = getAuth(initializeFirebase);
const user = auth.currentUser;

// collection ref
// const colRef = collection(db, "companies");
const colRef = collection(db, "games");

// take all games from DB.
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

// Add doc to collection.
export const addGame = ({ gameTitle, imgUrl, price, genre }) => {
  addDoc(colRef, {
    gameTitle,
    imgUrl,
    price: Number(price),
    genre,
    rating: [],
    owner: auth.currentUser.uid,
  });
};

// Registration
export const singUp = async ({ username, email, password }) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, { displayName: username });
};

// Login
export const singIn = ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      return cred.user.email;
    })
    .catch((err) => console.log(err.message));
};

export const logOut = () => {
  signOut(auth);
};

export const currentUser = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (userDB) => {
      if (userDB) {
        setUser(userDB.displayName);
      } else {
        setUser("");
      }
    });
  }, []);
  return user;
};

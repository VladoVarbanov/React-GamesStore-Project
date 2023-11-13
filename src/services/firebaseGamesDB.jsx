import { initializeFirebase } from "./firebaseConfigDB.js";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, "companies");
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

export const singUp = ({ username, email, password }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user created: ", cred.user);
    })
    .catch((err) => console.log(err.message));
};

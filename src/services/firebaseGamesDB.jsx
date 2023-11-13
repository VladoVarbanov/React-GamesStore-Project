import { initializeFirebase } from "./firebaseConfigDB.js";
import { useState, useEffect } from "react";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, collection, getDocs } from "firebase/firestore";

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
      return cred.user.email;
    })
    .catch((err) => console.log(err.message));
};

export const singIn = ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      return cred.user.email;
    })
    .catch((err) => console.log(err.message));
};

export const logOut = () => {
  signOut(auth)
    .then()
    .catch((err) => console.log(err.message));
};

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("User status changed: ", user.email);
  } else {
    console.log("User status changed: ", user);
  }
});

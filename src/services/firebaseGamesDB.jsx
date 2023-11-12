import { initializeFirebase } from "./firebaseConfigDB.js";
import { useState, useEffect } from "react";

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

// init services
const db = getFirestore();

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

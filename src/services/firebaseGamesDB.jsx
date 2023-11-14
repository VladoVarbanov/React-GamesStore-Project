import { initializeFirebase } from "./firebaseConfigDB.js";
import { useState, useEffect } from "react";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { getFirestore, collection, getDocs } from "firebase/firestore";

// init services
const db = getFirestore();
const auth = getAuth(initializeFirebase);

// collection ref
const colRef = collection(db, "companies");

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

export const singUp = async ({ username, email, password }) => {
  console.log({ username, email, password });
  await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, { displayName: username });
};

export const singIn = ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log(cred);
      return cred.user.email;
    })
    .catch((err) => console.log(err.message));
};

export const logOut = () => {
  signOut(auth);
};

// export const currentUser = () => {
//   const [user, setUser] = useState("");
//   useEffect(() => {
//     onAuthStateChanged(auth, (userDB) => {
//       if (userDB !== null) {
//         setUser(userDB.email);
//         // console.log("User status changed: ", userDB.email);
//       } else {
//         setUser("");

//         // console.log("User status changed: ", userDB);
//       }
//     });
//   }, [user]);

//   return user;
// };

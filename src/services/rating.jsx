import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { initializeFirebase } from "./firebaseConfigDB.js";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

// init services
const db = getFirestore();
const auth = getAuth(initializeFirebase);
const user = auth.currentUser;

// collection ref
const colRef = collection(db, "rating");

// Get Rating.
export const getRating = async (id) => {
  const [rating, setRating] = useState([]);

  useEffect(() => {
    const gameInfo = async () => {
      const ratingRef = await doc(db, "rating", id);
      const ratingData = (await getDoc(ratingRef)).data();
      if (ratingData !== undefined) {
        setRating(ratingData.rating);
      }
    };
    gameInfo();
  }, [id]);
  return rating;
};

// Set Rating.
export const sendRating = async (id, starRating, userId) => {
  const docRef = await doc(db, "rating", id);
  const getDocRef = (await getDoc(docRef)).data();

  if (getDocRef) {
    const isSameUser = getDocRef.users.filter((user) => {
      return user === userId;
    });
    if (!isSameUser.length) {
      console.log("Ok");
      await setDoc(
        doc(db, "rating", id),
        {
          rating: [...getDocRef.rating, starRating],
          users: [...getDocRef.users, userId],
        },
        { merge: true }
      );
    }
  } else {
    await setDoc(
      doc(db, "rating", id),
      {
        rating: [starRating],
        users: [userId],
      },
      { merge: true }
    );
  }
};

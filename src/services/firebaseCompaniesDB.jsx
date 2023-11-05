import { initializeFirebase } from "./firebaseConfigDB.js";
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

export const allCompanies = async () =>
  await (await getDocs(colRef)).docs.map((x) => [x.data()]);

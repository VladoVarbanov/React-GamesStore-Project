import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEeAFOJQ3FvqZsUC1rp3uzszyvbMT9zGA",
  authDomain: "indie-gamespot.firebaseapp.com",
  projectId: "indie-gamespot",
  storageBucket: "indie-gamespot.appspot.com",
  messagingSenderId: "402013752798",
  appId: "1:402013752798:web:3255bb656c9bc419e9a14f",
};

// init firebase app
export const initializeFirebase = initializeApp(firebaseConfig);

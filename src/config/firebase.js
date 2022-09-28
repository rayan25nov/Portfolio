import "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAnKgxucOruY3QY0u0oo_PPScUSo1OMPDU",
  authDomain: "resume-ca878.firebaseapp.com",
  projectId: "resume-ca878",
  storageBucket: "resume-ca878.appspot.com",
  messagingSenderId: "800795282378",
  appId: "1:800795282378:web:bd0d4995f8c27adbde1d33",
});

const storage = getStorage(firebaseConfig);

export default storage;

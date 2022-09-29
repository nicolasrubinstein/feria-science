import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQtsjfEI6-3Uu7pP8OxCMUGGRDxGw6xgE",
  authDomain: "feria-science.firebaseapp.com",
  projectId: "feria-science",
  storageBucket: "feria-science.appspot.com",
  messagingSenderId: "246740931790",
  appId: "1:246740931790:web:e5287c24a23f4b21712c9f",
  measurementId: "G-3P307GHXQH",
};

export const initApp = () => initializeApp(firebaseConfig);

export const initDB = (app: FirebaseApp) => getFirestore(app);

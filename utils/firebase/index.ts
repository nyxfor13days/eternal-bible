import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUYyLqJ8ruDCEyR2ZThOVxPmPrmDqsfzk",
  authDomain: "eternal-bible.firebaseapp.com",
  projectId: "eternal-bible",
  storageBucket: "eternal-bible.appspot.com",
  messagingSenderId: "682846964710",
  appId: "1:682846964710:web:e6c8456013c4f7b6c6e427",
  measurementId: "G-B602F7VX7L",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

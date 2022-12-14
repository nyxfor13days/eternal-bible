import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.API_KEY,
  authDomain: Constants.expoConfig?.extra?.AUTH_DOMAIN,
  projectId: Constants.expoConfig?.extra?.PROJECT_ID,
  storageBucket: Constants.expoConfig?.extra?.STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig?.extra?.MESSAGING_SENDER_ID,
  appId: Constants.expoConfig?.extra?.APP_ID,
  measurementId: Constants.expoConfig?.extra?.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

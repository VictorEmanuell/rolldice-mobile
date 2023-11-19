import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg7LaqGu5RtP7wirYZv1Y0THHT6m_40Ro",
  authDomain: "rolldice-15087.firebaseapp.com",
  projectId: "rolldice-15087",
  storageBucket: "rolldice-15087.appspot.com",
  messagingSenderId: "71258468991",
  appId: "1:71258468991:web:0d7e7bea1469593688c54a",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

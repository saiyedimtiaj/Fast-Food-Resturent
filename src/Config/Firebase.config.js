import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8bsWrdEt_4mrT2iPULfjdCWt0JduGUAY",
  authDomain: "assingment-11-404f6.firebaseapp.com",
  projectId: "assingment-11-404f6",
  storageBucket: "assingment-11-404f6.appspot.com",
  messagingSenderId: "224067711410",
  appId: "1:224067711410:web:5da8f1dd56df17f322f4ab"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
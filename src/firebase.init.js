import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  
 apiKey: "AIzaSyAvRRvt0kK7px7o2cokKf_r3x8dd-xrK_g",
  authDomain: "management-app-94db5.firebaseapp.com",
  projectId: "management-app-94db5",
  storageBucket: "management-app-94db5.appspot.com",
  messagingSenderId: "287548714686",
  appId: "1:287548714686:web:9f87f4503b386268dd38ef"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBpMNr5IFj3oEOaKujgQRpDnWSX5Nfrlrw",
   authDomain: "ecomerce-fit.firebaseapp.com",
   databaseURL: "https://ecomerce-fit-default-rtdb.firebaseio.com",
   projectId: "ecomerce-fit",
   storageBucket: "ecomerce-fit.appspot.com",
   messagingSenderId: "348570245888",
   appId: "1:348570245888:web:615f03543ab42f097471e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import{dataDatabase, getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function StartFirebase(){

const firebaseConfig = {
  apiKey: "AIzaSyAHP09Rqmh1UVYGVB_H5pAsPfOEYyPx0Nc",
  authDomain: "seminar-2c735.firebaseapp.com",
  databaseURL: "https://seminar-2c735-default-rtdb.firebaseio.com",
  projectId: "seminar-2c735",
  storageBucket: "seminar-2c735.appspot.com",
  messagingSenderId: "27505863063",
  appId: "1:27505863063:web:31ce3b87165bb930eb3cd2",
  measurementId: "G-B4Q9DQ2YB2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
return getDatabase(app);
}
export const auth = getAuth(app);

export default StartFirebase;
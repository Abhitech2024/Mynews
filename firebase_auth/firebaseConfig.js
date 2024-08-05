// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBJXWnT-lcaS9B4yyiuEtvlR5Qv6k5RYKY",
  authDomain: "mynews-f010c.firebaseapp.com",
  projectId: "mynews-f010c",
  storageBucket: "mynews-f010c.appspot.com",
  messagingSenderId: "81621138182",
  appId: "1:81621138182:android:6d19f4fb39da955044fc87"
  // measurementId: "YOUR_MEASUREMENT_ID"
};

export { firebaseConfig };
export const auth = firebase.auth();
export const database = firebase.database();

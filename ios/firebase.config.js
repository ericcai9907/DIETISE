import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzW4XXNwIplQuQplWaZHcVuk0zgbyZ5TE",
  authDomain: "recipes-a6ca1.firebaseapp.com",
  databaseURL: "https://recipes-a6ca1-default-rtdb.firebaseio.com",
  projectId: "recipes-a6ca1",
  storageBucket: "recipes-a6ca1.appspot.com",
  messagingSenderId: "710659050025",
  appId: "1:710659050025:web:e541df55a056f220aaaa38",
  measurementId: "G-SW393GFDZD"
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

export default db;
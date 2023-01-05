// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsx-igHjuqaEsCv73ZWI9AoKqV_soM6_E",
    authDomain: "netflix-clone-6d7c8.firebaseapp.com",
    projectId: "netflix-clone-6d7c8",
    storageBucket: "netflix-clone-6d7c8.appspot.com",
    messagingSenderId: "702295082152",
    appId: "1:702295082152:web:0a510c913d495ae2deee9d"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth(); 

  // export {auth};
  // export default db;
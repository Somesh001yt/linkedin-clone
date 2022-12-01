import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXA8YbvsU9YUJb3G9Xigi4SUgKD-iwQxc",
  authDomain: "linkedin-clone-project-2cafe.firebaseapp.com",
  projectId: "linkedin-clone-project-2cafe",
  storageBucket: "linkedin-clone-project-2cafe.appspot.com",
  messagingSenderId: "1065502581670",
  appId: "1:1065502581670:web:521dd44fd145b9646d6567",
  measurementId: "G-RY64275VF8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

export default firebase;

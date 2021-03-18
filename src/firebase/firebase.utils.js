import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "crwn-db-92509.firebaseapp.com",
    projectId: "crwn-db-92509",
    storageBucket: "crwn-db-92509.appspot.com",
    messagingSenderId: "23148510726",
    appId: "1:23148510726:web:26e4a63bf9d42f113dcd87",
    measurementId: "G-SWLGYSZ1B7"
  }

  console.log('process.env', process.env)

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

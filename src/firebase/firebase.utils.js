import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAoys-mncrq-RPsRP9_SuiJOyYwkEOD7dU",
    authDomain: "react-ecommerce-a1607.firebaseapp.com",
    databaseURL: "https://react-ecommerce-a1607.firebaseio.com",
    projectId: "react-ecommerce-a1607",
    storageBucket: "",
    messagingSenderId: "452672333461",
    appId: "1:452672333461:web:fa2cdeef2de0e691"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
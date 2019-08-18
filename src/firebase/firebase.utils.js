import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAoys-mncrq-RPsRP9_SuiJOyYwkEOD7dU",
	authDomain: "react-ecommerce-a1607.firebaseapp.com",
	databaseURL: "https://react-ecommerce-a1607.firebaseio.com",
	projectId: "react-ecommerce-a1607",
	storageBucket: "react-ecommerce-a1607.appspot.com",
	messagingSenderId: "452672333461",
	appId: "1:452672333461:web:fa2cdeef2de0e691"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

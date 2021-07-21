import firebase from 'firebase/app';
import 'firebase/firestore'; // firestore for the database
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCo7fGvzCjkSogbt-5Vm66CbCODpTDsfaI",
    authDomain: "crwn-cg.firebaseapp.com",
    projectId: "crwn-cg",
    storageBucket: "crwn-cg.appspot.com",
    messagingSenderId: "917308881480",
    appId: "1:917308881480:web:f061ead4d94e85f305f67d",
    measurementId: "G-HJBEXKQCDL"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)  // Note here we used userRef a constant not "useRef"

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
            })

        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    return (
        transformedCollection.reduce((accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection
            return accumulator
        }, {})
    )
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);

        }, reject)
    })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
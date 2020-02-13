import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDdYAsdODzRBuwvCxDn3lggFttB3ZyV3TQ',
    authDomain: 'e-commerce-project-808d6.firebaseapp.com',
    databaseURL: 'https://e-commerce-project-808d6.firebaseio.com',
    projectId: 'e-commerce-project-808d6',
    storageBucket: 'e-commerce-project-808d6.appspot.com',
    messagingSenderId: '1026424065002',
    appId: '1:1026424065002:web:c8e38efb5ab3fbae150093',
    measurementId: 'G-6RVNS4ZCK7'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log('snapShot.exists', snapShot);
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
            console.log('error in creating use', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

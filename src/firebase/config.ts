import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDVNo2IzrJMU2D0UUVNsne8uT9oNAZbCbo',
    authDomain: 'ezsun-ce0e2.firebaseapp.com',
    databaseURL: 'https://ezsun-ce0e2-default-rtdb.firebaseio.com',
    projectId: 'ezsun-ce0e2',
    storageBucket: 'ezsun-ce0e2.appspot.com',
    messagingSenderId: '395263000137',
    appId: '1:395263000137:web:8a84803ab9b94bc04b0998',
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

export const createUserProfileDocument = async (
    userAuth,
    additionalData,
    createIfNotExisted,
) => {
    if (!userAuth) {
        return;
    }

    const userRef = db.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists && createIfNotExisted) {
        const { displayName, email, uid } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set(
                {
                    id: uid,
                    displayName,
                    email,
                    createdAt,
                    ...additionalData,
                },
                { merge: true },
            );
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
};

export const getSnapshotFromUserAuth = async (
    userAuth,
    additionalData,
    createIfNotExisted = false,
) => {
    const userRef = await createUserProfileDocument(
        userAuth,
        additionalData,
        createIfNotExisted,
    );
    if (!userRef) {
        return null;
    }
    const userSnapshot = await userRef.get();

    return userSnapshot;
};

export { firebase };

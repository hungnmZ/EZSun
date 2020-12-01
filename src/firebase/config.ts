import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCj6L3VOo3uasrClH6_FkGCKIg3z0MieXk',
  authDomain: 'ezsun-e0016.firebaseapp.com',
  databaseURL: 'https://ezsun-e0016.firebaseio.com',
  storageBucket: 'ezsun-e0016.appspot.com',
  projectId: 'ezsun-e0016',
  appId: '1:592471652316:web:31c98b1bf4b37065130119',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData, createIfNotExisted) => {
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

export const getSnapshotFromUserAuth = async (userAuth, additionalData, createIfNotExisted = false) => {
  const userRef = await createUserProfileDocument(userAuth, additionalData, createIfNotExisted);
  if (!userRef) {
    return null;
  }
  const userSnapshot = await userRef.get();

  return userSnapshot;
};


export { firebase };

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDHqfrf151-WAeMjmm63LtP8iR4PO0cvPs',
  authDomain: 'clone-97241.firebaseapp.com',
  projectId: 'clone-97241',
  storageBucket: 'clone-97241.appspot.com',
  messagingSenderId: '526963332311',
  appId: '1:526963332311:web:a1dc4a45a4567425ba8c92',
  measurementId: 'G-6QE33LJCLB'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDoKKhz6Mgu4bTS3AboD595Z4H-pJQc94Y',
  authDomain: 'react-app-socialmedia.firebaseapp.com',
  projectId: 'react-app-socialmedia',
  storageBucket: 'react-app-socialmedia.appspot.com',
  messagingSenderId: '1060111441096',
  appId: '1:1060111441096:web:5cda758d7abb898a5119fd'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

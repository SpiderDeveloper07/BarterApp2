import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDt4zrUg1FHpdsOG_qQv3aF9Cto4FNK5g0",
  authDomain: "barter-app-2-fe63a.firebaseapp.com",
  projectId: "barter-app-2-fe63a",
  storageBucket: "barter-app-2-fe63a.appspot.com",
  messagingSenderId: "464949763052",
  appId: "1:464949763052:web:1210cc6a62ee947ae1fec9"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

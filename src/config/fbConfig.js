import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBHsTon-bk6QeUONbkfJ4Mk7rNhFxZpbx0",
    authDomain: "mario-plan-fed49.firebaseapp.com",
    databaseURL: "https://mario-plan-fed49.firebaseio.com",
    projectId: "mario-plan-fed49",
    storageBucket: "mario-plan-fed49.appspot.com",
    messagingSenderId: "507707458251",
    appId: "1:507707458251:web:b028ae6c9b6bf5c56d114e",
    measurementId: "G-BREPC14S0Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD6LaQCPFXaPIhOCfNhFBn_SI_nHJHtMbA",
    authDomain: "react-firebase-firegram-ce24f.firebaseapp.com",
    databaseURL: "https://react-firebase-firegram-ce24f.firebaseio.com",
    projectId: "react-firebase-firegram-ce24f",
    storageBucket: "react-firebase-firegram-ce24f.appspot.com",
    messagingSenderId: "239107158824",
    appId: "1:239107158824:web:e0047364318d7f149c561d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//storage for images
const projectStorage = firebase.storage()

//database
const projectFirestore = firebase.firestore()

//timestamp for images
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timeStamp } 
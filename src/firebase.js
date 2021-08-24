import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAmf_Gu9LVPe-bJvM1NvntxFx1BqA2E848",
    authDomain: "react-admission.firebaseapp.com",
    databaseURL: "https://react-admission-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-admission",
    storageBucket: "react-admission.appspot.com",
    messagingSenderId: "856729032427",
    appId: "1:856729032427:web:e6e68e8f32e1ad675790ae",
    measurementId: "G-NC65RSM5QP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export default firebase;
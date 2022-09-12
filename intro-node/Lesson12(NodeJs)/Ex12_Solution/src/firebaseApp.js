
import firebase from 'firebase/app';
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAWiRm-dPBdFEJBG6UBqoRsGuVqeMBzZwo",
  authDomain: "tech-career-575ac.firebaseapp.com",
  projectId: "tech-career-575ac",
  storageBucket: "tech-career-575ac.appspot.com",
  messagingSenderId: "385418892805",
  appId: "1:385418892805:web:2a2991aea061fb0b376e6c"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
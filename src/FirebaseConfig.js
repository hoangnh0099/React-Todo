import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDXIbVvnLtgdVw8z2byiap-InEiv-YGEho",
  authDomain: "todo-app-493ce.firebaseapp.com",
  databaseURL: "https://todo-app-493ce.firebaseio.com",
  projectId: "todo-app-493ce",
  storageBucket: "todo-app-493ce.appspot.com",
  messagingSenderId: "774291046339",
  appId: "1:774291046339:web:fd4ea060bcf44619"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
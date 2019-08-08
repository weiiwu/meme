import firebase from "firebase/app";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQ9advWJ1kTlwgRYtwn_gkdAwsuoZcRVE",
    authDomain: "slack-clone-3b4e3.firebaseapp.com",
    projectId: "slack-clone-3b4e3",
    storageBucket: "slack-clone-3b4e3.appspot.com",
    messagingSenderId: "554113363506",
    appId: "1:554113363506:web:71f35db566eb267a35162b",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
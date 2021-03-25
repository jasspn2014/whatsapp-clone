import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgOAW4LK01oL5mrwWhLHgPG3cECu030SY",
  authDomain: "whatsapp-clone-f07c7.firebaseapp.com",
  projectId: "whatsapp-clone-f07c7",
  storageBucket: "whatsapp-clone-f07c7.appspot.com",
  messagingSenderId: "567838316004",
  appId: "1:567838316004:web:1f9d4ddf4ce2161afc63f1",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

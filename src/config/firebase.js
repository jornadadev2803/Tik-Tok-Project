import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCbqbB1xemW9E3DJvdM_bbvxuEprLITzu0",
  authDomain: "jornada-dev.firebaseapp.com",
  projectId: "jornada-dev",
  storageBucket: "jornada-dev.appspot.com",
  messagingSenderId: "979503031222",
  appId: "1:979503031222:web:c89cfb3dc911bf3df4d717"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db
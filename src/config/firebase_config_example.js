import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "Pegar essas infos da sua conta do firebase no seu projeto",
  authDomain: "Pegar essas infos da sua conta do firebase no seu projeto",
  projectId: "Pegar essas infos da sua conta do firebase no seu projeto",
  storageBucket: "Pegar essas infos da sua conta do firebase no seu projeto",
  messagingSenderId: "Pegar essas infos da sua conta do firebase no seu projeto",
  appId: "Pegar essas infos da sua conta do firebase no seu projeto"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db
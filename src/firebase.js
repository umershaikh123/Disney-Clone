 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { GoogleAuthProvider , getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
 

 
const firebaseConfig = {
  apiKey: "AIzaSyDjQHzAPjMvzAnBAeWewyWUgUSnSBb-rMw",
  authDomain: "disneyplus-clone-app-1f919.firebaseapp.com",
  projectId: "disneyplus-clone-app-1f919",
  storageBucket: "disneyplus-clone-app-1f919.appspot.com",
  messagingSenderId: "946268430690",
  appId: "1:946268430690:web:900e3baccc3121d9b68c3b",
  measurementId: "G-GH98YGCNCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;











 
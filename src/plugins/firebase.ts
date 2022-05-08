import { getApps, initializeApp } from 'firebase/app'
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// 初期化
const apps = getApps
if (!apps.length) {
  initializeApp(firebaseConfig)
}
export const auth = getAuth();
export const db = getFirestore();
export const provider = new GoogleAuthProvider();

/**
 * ユーザー登録
 * @param email 
 * @param password 
 */
export const createUser = async (name: string, email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateUser(name)
      console.log("🚀 ~ file: firebase.ts ~ line 27 ~ .then ~ user", user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("🚀 ~ file: firebase.ts ~ line 31 ~ createUser ~ errorCode", errorCode)
      console.log("🚀 ~ file: firebase.ts ~ line 33 ~ createUser ~ errorMessage", errorMessage)
    });
}

const updateUser = async (name: string) => {
  await updateProfile(auth.currentUser!, {
    displayName: name
  }).then((user) => {
    console.log("🚀 ~ file: firebase.ts ~ line 27 ~ .then ~ user", user)
  }).catch((error) => {
    console.log("🚀 ~ file: firebase.ts ~ line 51 ~ updateUser ~ error", error)
  });
}

/**
 * ログイン
 * @param email 
 * @param password 
 */
export const loginUser = async (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("🚀 ~ file: firebase.ts ~ line 55 ~ .then ~ user", user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("🚀 ~ file: firebase.ts ~ line 60 ~ loginUser ~ errorCode", errorCode)
      console.log("🚀 ~ file: firebase.ts ~ line 61 ~ loginUser ~ errorMessage", errorMessage)
    });
};

/**
 * ログアウト
 */
export const logoutUser = async () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("user sign-out")
  }).catch((error) => {
    // An error happened.
    console.log("user sign-out error ", error.message)
  });
};

/**
 * Google ログイン
 */
export const googleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log("🚀 ~ file: firebase.ts ~ line 88 ~ .then ~ credential", credential)
      // The signed-in user info.
      const user = result.user;
      console.log("🚀 ~ file: firebase.ts ~ line 91 ~ .then ~ user", user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log("🚀 ~ file: firebase.ts ~ line 96 ~ .then ~ errorCode", errorCode)
      const errorMessage = error.message;
      console.log("🚀 ~ file: firebase.ts ~ line 98 ~ .then ~ errorMessage", errorMessage)
    });
}
import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: 'purrfectmatcher.firebaseapp.com',
  projectId: 'purrfectmatcher',
  storageBucket: 'purrfectmatcher.appspot.com',
  messagingSenderId: '755522862142',
  appId: '1:755522862142:web:d45f72ef54c7a3ef1b656f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

//Google sign-in
const provider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    return result.user.uid
  } catch (error) {
    throw error
  }
}

//Email sign in
const signInWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    console.log(result)
    return result.user.uid
  } catch (error) {
    throw error
  }
}

//Email sign up
const signUpWithEmail = async (email: string, password: string) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password)
    return newUser.user.uid
  } catch (error) {
    throw error
  }
}

//Sign out
const signOutUser = () => {
  signOut(getAuth())
}

export { signInWithEmail, signUpWithEmail, signOutUser, signInWithGoogle }

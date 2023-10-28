import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { getFirestore, getDoc, setDoc, doc } from 'firebase/firestore'

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
const db = getFirestore(app)

//Create user document in Firestore
const createUserDocument = async (user: string, username: string | null) => {
  await setDoc(doc(db, 'users', user), {
    username,
    favorites: [],
  })
}

//Check if user document exists in Firestore
const checkIfUserDocExists = async (user: string) => {
  const userRef = doc(db, 'users', user)
  const userSnapshot = await getDoc(userRef)
  return userSnapshot.exists()
}

//Google sign-in
const provider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  try {
    const newUser = await signInWithPopup(auth, provider)
    const newUserId = newUser.user.uid
    const newUserName = newUser.user.displayName
    const userExists = await checkIfUserDocExists(newUserId)
    if (!userExists) {
      await createUserDocument(newUserId, newUserName)
    }
    return newUserId
  } catch (error: any) {
    throw new Error(error.message)
  }
}

//Email sign in
const signInWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    console.log(result)
    return result.user.uid
  } catch (error: any) {
    throw new Error(error.message)
  }
}

//Email sign up
const signUpWithEmail = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password)
    createUserDocument(newUser.user.uid, username)
    return newUser.user.uid
  } catch (error: any) {
    throw new Error(error.message)
  }
}

//Sign out
const signOutUser = () => {
  signOut(getAuth())
}

export {
  createUserDocument,
  checkIfUserDocExists,
  signInWithEmail,
  signUpWithEmail,
  signOutUser,
  signInWithGoogle,
}

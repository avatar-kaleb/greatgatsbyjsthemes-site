const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
}

let firebaseInstance = null
export const getFirebase = () => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  const promises = [import("@firebase/app"), import("firebase/firestore")]
  return Promise.all(promises).then(([{ firebase }]) => {
    firebase.initializeApp(config)

    const firestore = firebase.firestore()
    firebaseInstance = { firebase, firestore }
    return firebaseInstance
  })
}

import { createContext } from 'react'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import env from '../env'

const initFirebase = () => {
  const firebaseConfig = {
    apiKey: env.API_KEY,
    authDomain: env.AUTH_DOMAIN,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.MESSAGIN_SENDER_ID,
    appId: env.APP_ID,
    measurementId: env.MEASUREMENT_ID
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const storage = getStorage(app)

  getAnalytics(app)

  return { db, storage }
}

export const FirebaseContext = createContext()

export const Firebase = FirebaseContext.Provider

export default initFirebase

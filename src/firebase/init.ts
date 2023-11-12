import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { createContext } from 'react'

import { FIREBASE_SETTING } from '../env'

export const initFirebase = () => {
  const firebaseConfig = {
    apiKey: FIREBASE_SETTING.API_KEY,
    authDomain: FIREBASE_SETTING.AUTH_DOMAIN,
    projectId: FIREBASE_SETTING.PROJECT_ID,
    storageBucket: FIREBASE_SETTING.STORAGE_BUCKET,
    messagingSenderId: FIREBASE_SETTING.MESSAGIN_SENDER_ID,
    appId: FIREBASE_SETTING.APP_ID,
    measurementId: FIREBASE_SETTING.MEASUREMENT_ID
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const storage = getStorage(app)

  getAnalytics(app)

  return { db, storage }
}

export const FirebaseContext = createContext()

export const Firebase = FirebaseContext.Provider

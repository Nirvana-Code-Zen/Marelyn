import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

type FirebaseSetting = {
  API_KEY: string
  AUTH_DOMAIN: string
  PROJECT_ID: string
  STOREAGE_BUCKET: string
  MESSAGIN_SENDER_ID: string
  APP_ID: string
  MEASUREMENT_ID: string
  STORAGE_BUCKET: string
}

export type FirebaseInstance = {
  db: unknown | null,
  storage: unknown | null
}

export const initFirebase = (FIREBASE_SETTING: FirebaseSetting): FirebaseInstance => {
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


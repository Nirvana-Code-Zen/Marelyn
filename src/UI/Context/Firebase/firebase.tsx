import React, { createContext, useRef } from "react"

import { FIREBASE_SETTING } from "~UI/env"

import { FirebaseInstance, initFirebase } from "~modules/Shared/Firebase"

export const FirebaseContext = createContext<FirebaseInstance>({ db: null, storage: null })

export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const { current: firebaseSettings } = useRef({
    API_KEY: FIREBASE_SETTING.API_KEY,
    AUTH_DOMAIN: FIREBASE_SETTING.AUTH_DOMAIN,
    PROJECT_ID: FIREBASE_SETTING.PROJECT_ID,
    STOREAGE_BUCKET: FIREBASE_SETTING.STORAGE_BUCKET,
    MESSAGIN_SENDER_ID: FIREBASE_SETTING.MESSAGIN_SENDER_ID,
    APP_ID: FIREBASE_SETTING.APP_ID,
    MEASUREMENT_ID: FIREBASE_SETTING.MEASURATION_ID,
    STORAGE_BUCKET: FIREBASE_SETTING.STORAGE_BUCKET,
  })

  const firebaseApp = initFirebase(firebaseSettings)

  return (
    <FirebaseContext.Provider value={firebaseApp}>
      {children}
    </FirebaseContext.Provider>
  )
}

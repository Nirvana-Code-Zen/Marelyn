import { FirebaseInstance } from "@modules/Shared/Firebase"
import React, { createContext } from "react"

export const FirebaseContext = createContext<FirebaseInstance>({ db: null, storage: null })

export const FirebaseProvider = ({ children, firebase }: { children: React.ReactNode, firebase: FirebaseInstance }) => {
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  )
}

import { doc, getDoc, setDoc } from "firebase/firestore"

import { signIn as signInWithFirebase } from "./firebaseAuth"

import { type User } from "~modules/auth/domain/User"
import { AuthProviders, AuthRepository, userAuthenticated, userNotAuthenticated } from "~modules/auth/domain/repository"

type Method = AuthProviders.Facebook

export function Auth(authMethod: Method, db: unknown): AuthRepository {
  return {
    signIn: () => signIn(authMethod),
    signOut,
    saveUser: (user: User) => saveUser(user, db),
    searchUser: (uid: string) => searchUser(uid, db)
  }
}

const signIn = async (authMethod: Method): Promise<userAuthenticated | userNotAuthenticated> => {
  const response = await signInWithFirebase(authMethod)
  return response
}

const saveUser = async (user: User, db: any): Promise<void> => {
  await setDoc(doc(db, 'Users', user.uid), {
    account_type: user.accountType,
    username: user.userName,
    name: user.name,
    email: user.email,
    profile_photo: user.profilePhoto,
    authMethod: user.authMethod
  })
}

const searchUser = async (uid: string, db: any): Promise<User | null> => {
  const docRef = doc(db, 'Users', uid)
  const snapshot = await getDoc(docRef)

  if (!snapshot.exists()) return null

  return snapshot.data() as User
}

const signOut = () => {}

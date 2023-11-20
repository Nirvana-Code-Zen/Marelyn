import {addDoc, collection} from "firebase/firestore"

import { signIn as signInWithFirebase } from "./firebaseAuth"

import { type User } from "~modules/auth/domain/User"
import { AuthProviders, AuthRepository, userAuthenticated, userNotAuthenticated } from "~modules/auth/domain/repository"

type Method = AuthProviders.Facebook

export function Auth(authMethod: Method, db: unknown): AuthRepository {
  return {
    signIn: () => signIn(authMethod),
    signOut,
    saveUser: (user: User) => saveUser(user, db)
  }
}

const signIn = async (authMethod: Method): Promise<userAuthenticated | userNotAuthenticated> => {
  const response = await signInWithFirebase(authMethod)

  if ('accessToken' in response) {
    localStorage.setItem('accessToken', response.accessToken)
  }

  return response
}

const saveUser = async (user: User, db: any): Promise<void> => {
  await addDoc(collection(db, 'Users'), {
    account_type: user.accountType,
    username: user.userName,
    name: user.name,
    email: user.email,
    profile_photo: user.profilePhoto,
    authMethod: user.authMethod
  })
}

const signOut = () => {}

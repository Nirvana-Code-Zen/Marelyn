import { signOut } from 'firebase/auth'
import { Firestore, doc, getDoc, setDoc } from 'firebase/firestore'

import { auth } from './AuthProviderFactory'
import { signIn as signInWithFirebase } from './firebaseAuth'

import { type User } from '~modules/auth/domain/User'
import { AuthMethodProvider, AuthRepository, SignOutRepository, userAuthenticated, userNotAuthenticated } from '~modules/auth/domain/repository'

export function Auth( db: Firestore): AuthRepository {
  return {
    signIn: (authMethod: AuthMethodProvider) => signIn(authMethod),
    saveUser: (user: User) => saveUser(user, db),
    searchUser: (uid: string) => searchUser(uid, db)
  }
}

export function AuthSignOut(): SignOutRepository {
  return {
    signOut: () => logOut()
  }
}

const signIn = async (authMethod: AuthMethodProvider): Promise<userAuthenticated | userNotAuthenticated> => {
  const response = await signInWithFirebase(authMethod)
  return response
}

const saveUser = async (user: User, db: Firestore): Promise<void> => {
  await setDoc(doc(db, 'Users', user.uid), {
    account_type: user.accountType,
    username: user.userName,
    name: user.name,
    email: user.email,
    profile_photo: user.profilePhoto,
    authMethod: user.authMethod
  })
}

const searchUser = async (uid: string, db: Firestore): Promise<User | null> => {
  const docRef = doc(db, 'Users', uid)
  const snapshot = await getDoc(docRef)

  if (!snapshot.exists()) return null

  return snapshot.data() as User
}

const logOut = (): void => {
  signOut(auth())
    .then(() => {})
    .catch((err: unknown) => console.error(err))
}

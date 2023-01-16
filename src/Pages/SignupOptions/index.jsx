import { useContext, useRef, useState } from 'react'
import { useLocation } from 'wouter'
import { collection, addDoc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'

import { FirebaseContext } from '../../firebase/init'

import SignUpOptionsStyled, { SignUpHeader, SignUpTitle } from './indexStyled'
import Button from '../../Components/Button'
import ErrorMessage from '../../Components/ErrorMessage'

const SignUpOptions = () => {
  const firestore = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState(null)

  const [location, setLocation] = useLocation()
  const { current: providerMethod } = useRef({
    facebook: FacebookAuthProvider,
    google: GoogleAuthProvider
  })

  const goToSignUp = () => {
    setLocation(`${location}email`)
  }

  const signInProvider = async (signInMethod) => {
    const ProviderOption = providerMethod[signInMethod]

    try {
      const provider = new ProviderOption()
      const auth = getAuth()
      const { user } = await signInWithPopup(auth, provider)

      await saveUserData(user)

      setLocation(`${location}dashboard`)
    } catch (error) {
      setErrorMessage(error)
    }
  }

  const saveUserData = async (user) =>
    await addDoc(collection(firestore, 'Users'), {
      account_type: 'cliente',
      name: user.displayName,
      username: user.displayName,
      email: user.email
    })

  const signInWithGoogle = async () => {
    signInProvider('google')
  }

  const signInWithFacebook = () => {
    signInProvider('facebook')
  }

  return (
    <SignUpOptionsStyled>
      <SignUpHeader>
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z" fill="currentColor"></path>
        </svg>
        <SignUpTitle>Registrate</SignUpTitle>
      </SignUpHeader>
      <Button onClick={signInWithFacebook} background='#2e89ff'>Registrate con Facebook</Button>
      <Button onClick={signInWithGoogle} background='#e84334'>Registrate con Google</Button>
      <Button onClick={goToSignUp}>Registrate con Email</Button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </SignUpOptionsStyled>
  )
}

export default SignUpOptions

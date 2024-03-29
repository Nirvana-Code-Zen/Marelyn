import { useState } from 'react'
import { useLocation } from 'wouter'

import { SignUpOptionsStyled, ButtonContainer, SignUpHeader, SignUpTitle } from './indexStyled'

import { Button } from '../../Components/Button'
import { ErrorMessage } from '../../Components/ErrorMessage'
import { Header } from '../../Components/Header'


export const SignUpOptions = () => {
  const [errorMessage] = useState(null)

  const [location, setLocation] = useLocation()
  

  const goToSignUp = () => {
    setLocation(`${location}email`)
  }

  const signInProvider = async () => {
    //const ProviderOption = providerMethod[signInMethod]

    //try {
    //  const provider = new ProviderOption()
    //  const auth = getAuth()
    //  const { user } = await signInWithPopup(auth, provider)

    //  await saveUserData(user)

    //  setLocation('/dashboard')
    //} catch (error) {
    //  setErrorMessage(error)
    //}
  }

  //const saveUserData = async (user) =>
  //  await addDoc(collection(firestore, 'Users'), {
  //    account_type: 'cliente',
  //    name: user.displayName,
  //    username: user.displayName,
  //    email: user.email
  //  })

  const signInWithGoogle = async () => {
    signInProvider()
  }

  const signInWithFacebook = () => {
    signInProvider()
  }

  return (
    <><Header />
      <SignUpOptionsStyled>
        <SignUpHeader>
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z" fill="currentColor"></path>
          </svg>
          <SignUpTitle>Registrate</SignUpTitle>
        </SignUpHeader>
        <ButtonContainer>
          <Button onClick={signInWithFacebook} background='#2e89ff' color='#2e89ff' arrow >Registrate con Facebook</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={signInWithGoogle} background='#e84334' color='#e84334' arrow >Registrate con Google</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={goToSignUp} background='#000' color='#000'arrow >Registrate con Email</Button>
        </ButtonContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </SignUpOptionsStyled></>
  )
}

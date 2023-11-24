import { useContext } from 'react'

import { AuthContext } from '~UI/Context/Auth'

import { LoginStyled, ContainerBannerStyled, ContainerFormLoginStyled } from './LoginStyled'


export const Login = () => {
  const auth = useContext(AuthContext)

  const login = async () => {
    try {
      await auth.signInWithFacebook()
    }catch(err) {
      // handle error message
    }
  }

  return (
    <LoginStyled>
      <ContainerBannerStyled>
        <img src="src/UI/assets/Bota.jpeg" alt="banner" className='banner' />
      </ContainerBannerStyled>
      <ContainerFormLoginStyled>
        <button onClick={login}>Login with Facebook</button>
        
      </ContainerFormLoginStyled>
    </LoginStyled>
  )
}



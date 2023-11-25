import { MouseEvent,  useContext } from 'react'

import { AuthContext } from '~UI/Context/Auth'

import { LoginStyled, ContainerBannerStyled, ContainerFormLoginStyled } from './LoginStyled'

import { AuthMethodProvider, AuthProviders } from '~modules/auth/domain/repository'

export const Login = () => {
  const auth = useContext(AuthContext)
  
  const login = async (evt: MouseEvent<HTMLButtonElement>) => {
    try {
      const { currentTarget } = evt
      const authMethod = currentTarget.getAttribute('data-authmethod') as AuthMethodProvider
      await auth.signInWith(authMethod)
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
        <button onClick={login} data-authmethod={AuthProviders.Facebook}>Login with Facebook</button>
        <button onClick={login} data-authmethod={AuthProviders.Google}>Login with Google</button>
      </ContainerFormLoginStyled>
    </LoginStyled>
  )
}



import {useContext} from 'react'
import { LoginStyled, ContainerBannerStyled, ContainerFormLoginStyled } from './LoginStyled'
import { AuthContext } from '~UI/Context/Auth'


export const Login = () => {
  const auth = useContext(AuthContext)

  const login = async () => {
    try {
      await auth.signInWithFacebook()
    }catch(err) {
      console.log('some error', err)
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



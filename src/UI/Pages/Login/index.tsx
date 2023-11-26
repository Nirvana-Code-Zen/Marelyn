import { MouseEvent,  useContext } from 'react'

import { AuthContext } from '~UI/Context/Auth'
import { Form, GroupForm, Input } from '~UI/Global-styles/Components/Forms'
import { BotaBannerImage, Email, FacebookImage, GmailImage, Logo } from '~UI/assets/ImagesPaths'

import { Button } from '~Components/Button'

import { LoginStyled, ContainerBannerStyled, ContainerFormLoginStyled, SocialContentStyled, ContainerLogo, ContainerNewtwork, Footer } from './LoginStyled'

import { AuthMethodProvider, AuthProviders } from '~modules/auth/domain/repository'

export const Login = () => {
  const auth = useContext(AuthContext)
  
  const inputLabels ={
    user: 'Usuario'.split(''),
    phone: 'Télefono'.split(''),
    email: 'Correo'.split('')
  }
  const login = async (evt: MouseEvent<HTMLButtonElement>) => {
    try {
      const { currentTarget } = evt
      const authMethod = currentTarget.getAttribute('data-authmethod') as AuthMethodProvider
      const res = await auth.signInWith(authMethod)
      console.error(res)
    }catch(err) {
      // handle error message
    }
  }

  return (
    <LoginStyled>
      <ContainerBannerStyled>
        <figure className='image-banner'>
          <img src={BotaBannerImage} alt="banner" className='banner' />
        </figure>
      </ContainerBannerStyled>
      <ContainerFormLoginStyled>
        <ContainerLogo>
          <figure className='image-logo'>
            <img src={Logo} alt="logo-Marelyn " />
          </figure>
        </ContainerLogo>

        <Form styledModifield={{ justify: 'center', direction: 'column' }}>
          <GroupForm>
            <span className='bar'>Usuario</span>
            <Input 
              width="80%" 
              name='user'
              type='text'
              margin_left="10px" 
              required
            />
          </GroupForm>
          <GroupForm>
            <span className='bar'>Télefono</span>
            <Input 
              width="80%" 
              name='phone'
              margin_left="10px" 
              type='number'
            />
          </GroupForm>
          <label htmlFor="change-loging-method">Usar correo</label>

          <Button
            onClick={login}
            background='#d4a413'
            size='large'
          >Iniciar sesion</Button>

          <label htmlFor="">O inicia sesion usando </label>
        </Form>
        <Footer>
          <SocialContentStyled>
            <ContainerNewtwork
              onClick={login}
              data-authmethod={AuthProviders.Facebook}
            >
              <img src={FacebookImage} alt="facebook" />
            </ContainerNewtwork>
            <ContainerNewtwork
              onClick={login}
              data-authmethod={AuthProviders.Google}
            >
              <img src={GmailImage} alt="facebook" />
            </ContainerNewtwork>
            <ContainerNewtwork
              onClick={login}
              data-authmethod={AuthProviders.Email}>
              <img src={Email} alt="facebook" />
            </ContainerNewtwork>
        
          </SocialContentStyled>
          <label htmlFor="">Registrate</label>
        
        </Footer>
        
        <button onClick={login} data-authmethod={AuthProviders.Facebook}>Login with Facebook</button>
        <button onClick={login} data-authmethod={AuthProviders.Google}>Login with Google</button>
        <button onClick={login} data-authmethod={AuthProviders.Email}>Login with email</button>
        <button onClick={login} data-authmethod={AuthProviders.Phone} id='sign-in-button'>Login with Phone</button>
      </ContainerFormLoginStyled>
    </LoginStyled>
  )
}


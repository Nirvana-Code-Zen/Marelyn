import { MouseEvent,  useContext } from 'react'

import { AuthContext } from '~UI/Context/Auth'
import { Form, GroupForm, Input } from '~UI/Global-styles/Components/Forms'
import { BotaBannerImage, Email, FacebookImage, GmailImage, Logo } from '~UI/assets/ImagesPaths'

import { Button } from '~Components/Button'
import { ButtomSizes } from '~Components/Button/types'

import { LoginStyled, ContainerBannerStyled, ContainerFormLoginStyled, SocialContentStyled, ContainerLogo, ContainerNewtwork, Footer, ContainerMainForm } from './LoginStyled'

import { AuthMethodProvider, AuthProviders } from '~modules/auth/domain/repository'

export const Login = () => {
  const auth = useContext(AuthContext)
  
  // const inputLabels ={
  //   user: 'Usuario'.split(''),
  //   phone: 'Télefono'.split(''),
  //   email: 'Correo'.split('')
  // }
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
        <ContainerMainForm>
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
                type='text'
              />
            </GroupForm>
            <label htmlFor="change-loging-method">Usar correo</label>

            <Button background='#d4a413' size={ButtomSizes.LARGE}>
            Iniciar sesion
            </Button>

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
        </ContainerMainForm>
      </ContainerFormLoginStyled>
    </LoginStyled>
  )
}


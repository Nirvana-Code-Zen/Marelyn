import { Form } from '~UI/Global-styles/Components/Forms'

import { LoginStyled, ContainerBannerStyled, ContainerFormLoginStyled } from './LoginStyled'

export const Login = () => {
  return (
    <LoginStyled>
      <ContainerBannerStyled>
        <img src="src/UI/assets/Bota.jpeg" alt="banner" className='banner' />
      </ContainerBannerStyled>
      <ContainerFormLoginStyled>
        <Form>
          
        </Form>
      </ContainerFormLoginStyled>
    </LoginStyled>
  )
}



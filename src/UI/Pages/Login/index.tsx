import { AuthCredential } from 'firebase/auth'
import { MouseEvent,  useCallback,  useContext, useEffect, useRef, useState } from 'react'

import { AuthContext } from '~UI/Context/Auth'
import { Form, GroupForm, Input } from '~UI/Global-styles/Components/Forms'
import { BotaBannerImage, Email, FacebookImage, GmailImage, Logo } from '~UI/assets/ImagesPaths'

import { Button } from '~Components/Button'

import { LoginStyled, ContainerBannerStyled, ContainerFormLoginStyled, SocialContentStyled, ContainerLogo, ContainerNewtwork, Footer } from './LoginStyled'

import { AuthMethodProvider, AuthProviders, Opts } from '~modules/auth/domain/repository'

export const Login = () => {
  const auth = useContext(AuthContext)
  const $verificationCode = useRef<HTMLInputElement>(null)
  const optsRef = useRef<Opts | null>(null)
  const authResolveRef = useRef<(value: AuthCredential | PromiseLike<AuthCredential>) => void | null>(null)

  const [isShowCode, setIsShowCode] = useState<boolean>(false)
  const [verificationCode, setVerificationCode] = useState<string>('')
  
  const inputLabels ={
    user: 'Usuario'.split(''),
    phone: 'Télefono'.split(''),
    email: 'Correo'.split('')
  }
  const login = async (evt: MouseEvent<HTMLButtonElement>) => {
    try {
      const { currentTarget } = evt
      const authMethod = currentTarget.getAttribute('data-authmethod') as AuthMethodProvider
      const _res = await auth.signInWith(authMethod)
    }catch(err) {
      // handle error message
    }
  }

  useEffect(() => {
    if (verificationCode && optsRef.current) {
      const authCredentials = optsRef.current.setVerificationCode(optsRef.current.verificationId, verificationCode) as AuthCredential
      authResolveRef.current && authResolveRef.current(authCredentials)
    }
  }, [verificationCode])

  const executeAuthCallback = useCallback((): Promise<AuthCredential> => {
    const promise = new Promise<AuthCredential>(resolve => {
      authResolveRef.current = resolve
    })

    return promise
  }, [verificationCode])

  const loginWithPhone = async (evt: MouseEvent<HTMLButtonElement>) => {
    try {
      const { currentTarget } = evt
      const authMethod = currentTarget.getAttribute('data-authmethod') as AuthMethodProvider
      setIsShowCode(true)
      auth.signInWithData(authMethod, {
        data: '+553319874195',
        cb: (opts: Opts) => {
          optsRef.current = opts
          return executeAuthCallback()
        }
      })
    }catch(err) {
      console.error(err)
    }
  }

  const handleVerificationCode = () =>
    $verificationCode.current?.value && setVerificationCode($verificationCode.current.value)

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
        
        {isShowCode && (
          <>
            <input type="text" ref={$verificationCode} placeholder='000-000'/>
            <button onClick={handleVerificationCode}>Enviar codigo</button>
          </>
        )}
        <button onClick={login} data-authmethod={AuthProviders.Facebook}>Login with Facebook</button>
        <button onClick={login} data-authmethod={AuthProviders.Google}>Login with Google</button>
        <button onClick={login} data-authmethod={AuthProviders.Email}>Login with email</button>
        <button onClick={loginWithPhone} data-authmethod={AuthProviders.Phone} id='sign-in-button'>Login with Phone</button>
      </ContainerFormLoginStyled>
    </LoginStyled>
  )
}


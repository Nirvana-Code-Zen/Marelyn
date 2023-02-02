import Form, { GroupForm, Input } from '../../Global-styles/Components/Forms'
import Button from '../../Components/Button'
import SocialContent from './LoginStyled'
import ErrorMessage from '../../Components/ErrorMessage'

import { Link, useLocation } from 'wouter'
import { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { getAuth, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { collectFormData, validateData } from '../../utils'
import { validatorAccessLogin } from '../../utils/validationForms'

const Login = () => {
  const inputLabels = {
    email: 'Correo'.split(''),
    password: 'Contraseña'.split('')
  }

  const { current: validatorLogin } = useRef(validatorAccessLogin)

  const [location, setLocation] = useLocation()
  const formRef = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const btnLogin = async event => {
    event.preventDefault()
    const data = collectFormData(formRef.current)
    const validation = Object.values(validateData(data, validatorLogin))

    if (validation.lengh) {
      return validation.forEach(message => setErrorMessage((prevMessage) => `${prevMessage || ''} * ${message}/n`))
    }
    setLocation(`${location}dashboard`)
  }

  const facebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider()

      const auth = getAuth()

      const result = await signInWithPopup(auth, provider)
      const user = result.user
      const credential = FacebookAuthProvider.credentialFromResult(result)
      const token = credential.accessToken

      setLocation('dashboard')

      return { user, token }
    } catch (error) {
      setErrorMessage(error)
    }
  }

  const googleLogin = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()

      const result = await signInWithPopup(auth, provider)
      const user = result.user
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken

      setLocation('dashboard')
      return console.log({ user, token })
    } catch (error) {
      setErrorMessage(error)
    }
  }

  return (
    <div className='mt-5'>
      <Form
        ref={formRef}
        className='boxshadow'
        styledModified={{
          width: '400px',
          justify: 'space-evenly',
          padding: '30px 0'
        }}
      >
        {errorMessage && (
          <ErrorMessage>
            {errorMessage.split('\n').map(message => <p key={message}></p>)}
          </ErrorMessage>
        )}
        <GroupForm >
          <Input type="text" name="email" required />
            <span className='bar'></span>
            <label >
            {inputLabels.email.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
            </label>
            {errorMessage && <ErrorMessage><p>El correo que ingresaste esta mal escrito</p></ErrorMessage>}
        </GroupForm>
        <GroupForm>
          <Input type="password"name="password" required />
            <span className='bar'></span>
            <label >
            {inputLabels.password.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
            </label>
        </GroupForm>
            <Link href='/restore-password'>
              <p className='mt-2 mb-2'> Olvidaste tu contraseña? </p>
            </Link>
            <div className='container'>
                <Button onClick={btnLogin} size='medium' >Entrar</Button>
                <span className='my'>O inicia sesion usando</span>
            </div>
            <SocialContent>
                <div onClick={facebookLogin}>
                  <img src="src/assets/facebook.png" alt="facebook" />
                </div>
                <div onClick={googleLogin} className='div-c'>
                  <img src="src/assets/gmail.png" alt="gmail" />
                </div>
            </SocialContent>
        <Link href='sign-up'>
          <p>Registrate</p>
        </Link>
      </Form>
    </div>
  )
}

const FormSpan = ({ char, index }) => {
  return (
      <span
        className={char === ' ' ? 'label-char space_word ' : 'label-char'}
        style={{ '--index': index }}>
        {char}
      </span>
  )
}

FormSpan.propTypes = {
  char: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default Login

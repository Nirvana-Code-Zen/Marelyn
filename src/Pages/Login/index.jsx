import Form, { GroupForm, Input } from '../../Global-styles/Components/Forms'
import { H2 } from '../../Global-styles/Components/Titles'
import Button from '../../Components/Button'

import './login.css'
import { useState } from 'react'

export default function Login () {
  const inputLabels = {
    email: 'Correo'.split(''),
    password: 'Contraseña'.split('')
  }

  const btnEntrar = event => {
    event.preventDefault()
    console.log('Soy un boton')
  }

  const [activeEmail, setActiveEmail] = useState(false)
  const [activePassword, setActivePassword] = useState(false)

  return (
  <>
    <H2>Iniciar sesion</H2>
     <Form $width='400px' $height='500px' className='boxshadow' $justify='space-evenly'>
       <GroupForm >
        <Input
        type="text"
        name="email"
        required=''
        tabIndex='0'
        onFocus={ () => setActiveEmail(true) }
        onBlur={ () => setActivePassword(false)}
         />
        <span className='bar'></span>
        <label className={activeEmail ? 'active' : ''}>
          {inputLabels.email.map((char, index) => (
            <span
              key={index}
              className="label-char"
              style={{ '--index': index }}>
              {char}
            </span>
          ))}
        </label>
       </GroupForm>
       <GroupForm>
        <Input
        type="password"
        name="password"
        required=''
        />
        <span className='bar'></span>
        <label className={activePassword ? 'active' : ''}>
          {inputLabels.password.map((char, index) => (
            <span
              key={index}
              className="label-char"
              style={{ '--index': index }}>
              {char}
            </span>
          ))}
        </label>
       </GroupForm>
       <p className='password'> <a href="https://es.code-paper.com/css/examples-css-bold-letters">Olvidaste tu contraseña?</a> </p>
       <div >
      <Button onClick={btnEntrar} $width_sizing='wThirteenthTundred'>Entrar</Button>
      </div>
       <p>O inicia sesion usando</p>
      <div className='content-social'>
        <a href="https://www.facebook.com/">
          <img src="src/assets/facebook.png" alt="facebook" />
        </a>
        <a href="https://mail.google.com/">
          <img src="src/assets/gmail.png" alt="gmail" />
        </a>

      </div>
      <p><a href="/sign-up"> Registrate</a></p>
     </Form>
   </>
  )
}

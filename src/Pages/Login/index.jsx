import Form, { GroupForm, Input } from '../../Global-styles/Components/Forms'
import { H2 } from '../../Global-styles/Components/Titles'
import Button from '../../Components/Button'

import './login.css'
import { Link } from 'wouter'
import PropTypes from 'prop-types'

export default function Login () {
  const inputLabels = {
    email: 'Correo'.split(''),
    password: 'Contraseña'.split('')
  }

  const btnEntrar = event => {
    event.preventDefault()
    console.log('Soy un boton')
  }

  return (
  <>
    <H2>Iniciar sesion</H2>
     <Form
     $width='400px'
     $height='530px'
     className='boxshadow'
     $justify='space-evenly'
     $margin='auto'
     >
       <GroupForm >
        <Input type="text" name="email" required=''$margin='20px 0'/>
        <span className='bar'></span>
        <label >
        {inputLabels.email.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
        ))}
        </label>
       </GroupForm>
       <GroupForm>
        <Input type="password"name="password" required=''
        />
        <span className='bar'></span>
        <label >
        {inputLabels.password.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
        ))}
        </label>
       </GroupForm>
       <p className='password'> <a href="">Olvidaste tu contraseña?</a> </p>
       <div >
      <Button onClick={btnEntrar} $width_sizing='wThirteenthTundred'>Entrar</Button>
      </div>
       <span>O inicia sesion usando</span>
      <div className='content-social'>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src="src/assets/facebook.png" alt="facebook" />
        </a>
        <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
          <img src="src/assets/gmail.png" alt="gmail" />
        </a>
      </div>
      <Link href='sign-up'>
         <p> Registrate </p>
      </Link>
     </Form>
   </>
  )
}

const FormSpan = ({ char, index }) => {
  return (
      <span
        className={char === ' ' ? 'label-char space' : 'label-char'}
        style={{ '--index': index }}>
        {char}
      </span>
  )
}

FormSpan.propTypes = {
  char: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

import Form, { GroupForm, Input } from '../../Global-styles/Components/Forms'
import Button from '../../Components/Button'

import { Link } from 'wouter'
import PropTypes from 'prop-types'
import SocialContent from './LoginStyled'

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
    <div className='mt-5'>
      <Form
        className='boxshadow'
        styledModified={{
          width: '400px',
          justify: 'space-evenly',
          padding: '30px 0'
        }}
      >
        <GroupForm >
          <Input type="text" name="email" required />
            <span className='bar'></span>
            <label >
            {inputLabels.email.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
            </label>
        </GroupForm>
        <GroupForm>
          <Input type="password"name="password" required=''/>
            <span className='bar'></span>
            <label >
            {inputLabels.password.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
            </label>
        </GroupForm>
            <p className='mt-2 mb-2'> <a href="">Olvidaste tu contraseña?</a> </p>
            <div className='container'>
              <Button onClick={btnEntrar} size='medium' >Entrar</Button>
                <span className='my'>O inicia sesion usando</span>
            </div>
            <SocialContent>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img src="src/assets/facebook.png" alt="facebook" />
              </a>
              <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
                <img src="src/assets/gmail.png" alt="gmail" />
              </a>
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
        className={char === ' ' ? 'label-char space_word label-span' : 'label-char'}
        style={{ '--index': index }}>
        {char}
      </span>
  )
}

FormSpan.propTypes = {
  char: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

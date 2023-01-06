import Form, { GroupForm, Input } from '../../Global-styles/Components/Forms'
import { H4 } from '../../Global-styles/Components/Titles'
import Button from '../../Components/Button'

import './login.css'

export default function Login () {
  const inputLabels = {
    email: 'Correo'.split(''),
    password: 'Contraseña'.split('')
  }

  const btnEntrar = e => {
    e.preventDefault()
    console.log('Soy un boton')
  }

  return (
  <div>
    <H4>Login</H4>
     <Form $width='400px' className='boxshadow'>
       <GroupForm>
        <Input type="text" name="email" required className=''/>
        <span className='bar'></span>
        <label>
          {inputLabels.email.map((char, index) => (
            <span key={index} className="label-char" style={{ '--index': index }}>{char}</span>
          ))}
        </label>
       </GroupForm>
       <GroupForm>
        <Input type="password" name="password" required className=''/>
        <span className='bar'></span>
        <label>
          {inputLabels.password.map((char, index) => (
            <span key={index} className="label-char" style={{ '--index': index }} >{char}</span>
          ))}
        </label>
       </GroupForm>
       <label className='password'> <a href="https://es.code-paper.com/css/examples-css-bold-letters">Olvidaste tu contraseña?</a> </label>
       <div >
      <Button onClick={btnEntrar} $width_sizing='wTen'>Entrar</Button>
      </div>
     </Form>
   </div>
  )
}

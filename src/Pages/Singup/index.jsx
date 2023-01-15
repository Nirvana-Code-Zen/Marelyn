import Button from '../../Components/Button'
import { GroupForm, Input } from '../../Global-styles/Components/Forms'
import SignupStyled from '../Singup/SignupStyled'
import Header from '../../Components/Header'

import '../Singup/signUp.css'

const SingUp = () => {
  const inputLabel = {
    name: 'Nombre  del usuario'.split(''),
    surName: 'Apellido paterno'.split(''),
    lastName: 'Apellido materno'.split(''),
    email: 'Correo'.split(''),
    password: 'Contraseña'.split(''),
    confirmPassword: 'Confirmar contraseña'.split('')
  }

  const btnCreate = e => {
    e.preventDefault()
    console.log('Soy un boton de crear')
  }

  return (
    <>
      <Header />
      <SignupStyled $width='400px' className='boxshadow'>
        <GroupForm >
          <Input id="mail" type="text" />
          <span className='bar'></span>
          <label >
            {inputLabel.name.map((char, index) => (
              <span
                key={index}
                className='label-char'
                style={{ '--index': index }} >{char}
              </span>
            ))}
          </label>
        </GroupForm >
        <GroupForm >
          <Input id="mail" type="text" />
          <span className='bar'></span>
          <label>
            {inputLabel.surName.map((char, index) => (
              <span
                key={index}
                className='label-char'
                style={{ '--index': index }} >{char}
              </span>
            ))}
          </label>
        </GroupForm>
        <GroupForm>
          <Input id="mail" type="text" />
          <span className='bar'></span>
          <label >
            {inputLabel.lastName.map((char, index) => (
              <span
                key={index}
                className='label-char'
                style={{ '--index': index }} >{char}
              </span>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='input-select'>
          <select name="select-count" id="tipe-count" className='inputSelect'>
            <option value="cliente">Tipo de usuario</option>
            <option value="cliente">Administrado</option>
            <option value="cliente">Trabajador</option>
            <option value="cliente">Cliente</option>
          </select>
        </GroupForm>
        <GroupForm >
          <Input id="mail" type="text" />
          <span className='bar'></span>
          <label >
            {inputLabel.email.map((char, index) => (
              <span
                key={index}
                className='label-char'
                style={{ '--index': index }} >{char}
              </span>
            ))}
          </label>
        </GroupForm>
        <GroupForm>
          <Input id="mail" type="text" />
          <span className='bar'></span>
          <label >
            {inputLabel.password.map((char, index) => (
              <span
                key={index}
                className='label-char'
                style={{ '--index': index }} >{char}
              </span>
            ))}
          </label>
        </GroupForm>
        <GroupForm>
          <Input id="mail" type="text" />
          <span className='bar'></span>
          <label >
            {inputLabel.confirmPassword.map((char, index) => (
              <span
                key={index}
                className='label-char'
                style={{ '--index': index }} >{char}
              </span>
            ))}
          </label>
        </GroupForm>

      </SignupStyled>
      <Button onClick={btnCreate} $width_sizing='wTen'>Crear</Button>
    </>
  )
}

export default SingUp

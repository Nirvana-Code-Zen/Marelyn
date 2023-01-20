import Button from '../../Components/Button'
import Form, { GroupForm, Input, Select } from '../../Global-styles/Components/Forms'
import Header from '../../Components/Header'
import { H2 } from '../../Global-styles/Components/Titles'

import '../Singup/signUp.css'
import PropTypes from 'prop-types'

const SingUp = () => {
  const inputLabel = {
    name: 'Nombre del usuario'.split(''),
    surName: 'Apellido paterno'.split(''),
    lastName: 'Apellido materno'.split(''),
    email: 'Correo'.split(''),
    password: 'Contraseña'.split(''),
    confirmPassword: 'Confirmar contraseña'.split('')
  }

  console.log(inputLabel.name)

  const btnCreate = e => {
    e.preventDefault()
    console.log('Soy un boton de crear')
  }

  return (
    <>
      <Header />
      <H2>Registro</H2>
      <Form
        $width='80%' $direction='row'
        $wrap='wrap' $margin='auto'
        $top='120px' className='boxshadow'
        $justify='space-evenly' $padding='0px 40px'
      >
        <GroupForm >
          <Input id="mail" type="text" required=''/>
          <span className='bar'></span>
          <label >
            {inputLabel.name.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))} &nbsp;
          </label>
        </GroupForm >
        <GroupForm >
          <Input id="mail" type="text" required=''/>
          <span className='bar'></span>
          <label >
            {inputLabel.surName.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm>
          <Input id="mail" type="text" required='' />
          <span className='bar'></span>
          <label >
            {inputLabel.lastName.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm>
          <Select >
            <option value="cliente">Tipo de usuario</option>
            <option value="cliente">Administrado</option>
            <option value="cliente">Trabajador</option>
            <option value="cliente">Cliente</option>
          </Select>
        </GroupForm>
        <GroupForm $margin='-20px '>
          <Input id="mail" type="text" required=''/>
          <span className='bar'></span>
          <label >
            {inputLabel.email.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm >
          <Input id="mail" type="text" required=''/>
          <span className='bar'></span>
          <label >
            {inputLabel.password.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm $margin>
          <Input id="mail" type="text" required=''/>
          <span className='bar'></span>
          <label >
            {inputLabel.confirmPassword.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <div>

        </div>
      </Form>
      <Button onClick={btnCreate} $width_sizing='wTen'>Crear</Button>
    </>
  )
}

const FormSpan = ({ char, index }) => {
  return (
    <span
      className={char === ' ' ? 'label-char space' : 'label-char'}
      style={{ '--index': index }}
    >
      {char}
    </span>
  )
}

FormSpan.propTypes = {
  char: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default SingUp

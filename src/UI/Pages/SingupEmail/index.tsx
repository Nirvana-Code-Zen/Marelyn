import { collection, addDoc } from 'firebase/firestore'
import PropTypes from 'prop-types'
import { useRef, useState, useContext } from 'react'
import { useLocation } from 'wouter'

import {Button} from '../../Components/Button'
import {ErrorMessage} from '../../Components/ErrorMessage'
import {Header} from '../../Components/Header'
import { FirebaseContext } from '../../Context/Firebase'
import { Form, GroupForm, Input, Select } from '../../Global-styles/Components/Forms'
import { collectFormData, validateData } from '../../utils'
import { createUserValidator } from '../../utils/validationForms'


import {BtnContainer} from './SignupStyled'

export const SingUp = () => {
  const firestore = useContext(FirebaseContext)
  const { current: validationFormat } = useRef(createUserValidator)

  const formRef = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useLocation()[1]

  const createUser = async (email, password) => {
    const auth = {}
    try {
      await Promise.resolve()
    } catch (err) {
      const { customData: { _tokenResponse: { error } } } = err
      throw new Error(error.message.split('_').join(' ').toLowerCase())
    }
  }

  const saveUserData = async (user) =>
    await addDoc(collection(firestore.db, 'Users'), {
      account_type: 'cliente',
      username: user.usuario,
      name: user.nombre,
      last_name: user.apellido_paterno,
      mid_name: user.apellido_materno,
      email: user.email
    })

  const createUserHandle = async evt => {
    evt.preventDefault()
    const data = collectFormData(formRef.current)

    const validation = Object.values(validateData(data, validationFormat))

    if (validation.length) {
      return validation.forEach(message => setErrorMessage((prevMessage) => `${prevMessage || ''} * ${message}\n`))
    }

    if (data.contrasena !== data.confirmar_contrasena) {
      return setErrorMessage('* Contraseñas son distintas')
    }

    try {
      setErrorMessage(null)
      await createUser(data.email, data.contrasena)
      await saveUserData(data)
      navigate('dashboard', { replace: true })
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  const inputLabels = {
    user: 'Nombre de usuario'.split(''),
    names: 'Nombre(s)'.split(''),
    last_name: 'Apellido Paterno'.split(''),
    mid_name: 'Apellido Materno'.split(''),
    email: 'Correo'.split(''),
    password: 'Contraseña'.split(''),
    confirm_password: 'Confirma contraseña'.split('')
  }

  return (
    <>
      <Header/>
      <Form
        ref={formRef}
        className='boxshadow'
        styledModified={{
          width: '80%',
          top: '180px',
          wrap: 'wrap',
          justify: 'space-evenly',
          direction: 'colunm',
          padding: '40px 20px',
          gap: '2rem'
        }}
      >

        {errorMessage && (
          <ErrorMessage>
            {errorMessage.split('\n').map(message => <p key={message}>{message}</p>)}
          </ErrorMessage>
        )}

        <GroupForm className='my-2'>
          <Input id="userName" type="text" name="usuario" alt="user" required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.user} >
            {inputLabels.user.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2'>
          <Input id="name" name="nombre" type="text" alt="name" required/>
          <span className='bar'></span>
          <label >
            {inputLabels.names.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2'>
          <Input id="lastName" type="text" name="apellido_paterno" alt="lastName" required/>
          <span className='bar'></span>
          <label >
            {inputLabels.last_name.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2'>
          <Input id="secondLastName" type="text" name="apellido_materno" alt="secondLastName" required/>
          <span className='bar'></span>
          <label >
            {inputLabels.mid_name.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <Select >
          <option value="type_usuari">Tipo de usuario</option>
          <option value="type_usuari">Administrador</option>
          <option value="type_usuari">Empleado</option>
          <option value="type_usuari">Cliente</option>
        </Select>
        <GroupForm className='my-2'>
          <Input id="mail" type="email" name="email" alt="email" required/>
          <span className='bar'></span>
          <label >
            {inputLabels.email.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2'>
          <Input id="password" type="password" name="contrasena" alt="password" required/>
          <span className='bar'></span>
          <label >
            {inputLabels.password.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2'>
          <Input id="confirmPassword" type="password" name="confirmar_contrasena" alt="confirmPassword" required/>
          <span className='bar'></span>
          <label >
            {inputLabels.confirm_password.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <BtnContainer>
          <div>
            <Button size='medium' type='submit' onClick={createUserHandle} >Crear</Button>
          </div>
        </BtnContainer>
      </Form>
    </>
  )
}

const FormSpan = ({ char, index }) => {
  return (
    <span
      className={char === ' ' ? 'label-char space_word' : 'label-char'}
      style={{ '--index': index }} >
      {char}
    </span>
  )
}

FormSpan.propTypes = {
  char: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

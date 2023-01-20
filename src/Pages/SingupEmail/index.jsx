import { useRef, useState, useContext } from 'react'
import { useLocation } from 'wouter'
import { collection, addDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import Button from '../../Components/Button'
import ErrorMessage from '../../Components/ErrorMessage'
import Form, { GroupForm, Input } from '../../Global-styles/Components/Forms'

import { FirebaseContext } from '../../firebase/init'
import { collectFormData, validateData } from '../../utils'
import { createUserValidator } from '../../utils/validationForms'

const SingUp = () => {
  const firestore = useContext(FirebaseContext)

  const { current: validationFormat } = useRef(createUserValidator)

  const formRef = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useLocation()[1]

  const createUser = async (email, password) => {
    const auth = getAuth()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      const { customData: { _tokenResponse: { error } } } = err
      throw new Error(error.message.split('_').join(' ').toLowerCase())
    }
  }
  const saveUserData = async (user) =>
    await addDoc(collection(firestore, 'Users'), {
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

  return (
    <>
      <Form ref={formRef}>
        {errorMessage && (
          <ErrorMessage>
            {errorMessage.split('\n').map(message => <p key={message}>{message}</p>)}
          </ErrorMessage>
        )}

        <GroupForm>
          <label htmlFor="userName">Nombre de usuario</label>
          <Input id="userName" type="text" name="usuario"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="name" >Nombre(s)</label>
          <Input id="name" name="nombre" type="text"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="lastName">Apellido Paterno</label>
          <Input id="lastName" type="text" name="apellido_paterno"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="secondLastName">Apellido Materno</label>
          <Input id="secondLastName" type="text" name="apellido_materno"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="mail">Correo</label>
          <Input id="mail" type="email" name="email"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="password">Contraseña</label>
          <Input id="password" type="password" name="contrasena"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="confirmPassword">Confirma contraseña</label>
          <Input id="confirmPassword" type="password" name="confirmar_contrasena"/>
        </GroupForm>
        <GroupForm>
          <Button onClick={createUserHandle}>Crear</Button>
        </GroupForm>
      </Form>
    </>
  )
}

export default SingUp

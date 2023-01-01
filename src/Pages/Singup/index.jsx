import { useRef, useState } from 'react'
import Button from '../../Components/Button'
import ErrorMessage from '../../Components/ErrorMessage'
import Form, { GroupForm, Input } from '../../Global-styles/Components/Forms'

import { collectFormData, validateData } from '../../utils'
import { createUserValidator } from '../../utils/validationForms'

const SingUp = () => {
  const { current: validationFormat } = useRef(createUserValidator)

  const formRef = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const createUserHandle = evt => {
    evt.preventDefault()
    const data = collectFormData(formRef.current)

    const validation = Object.values(validateData(data, validationFormat))
    if (validation.length) {
      setSuccessMessage('')
      return validation.forEach(message => setErrorMessage((prevMessage) => `${prevMessage || ''} * ${message}\n`))
    }

    if (data.contrasena !== data.confirmar_contrasena) {
      return setErrorMessage('* Contraseñas son distintas')
    }

    setErrorMessage(null)
    setSuccessMessage('Usuario creado correctamente')
  }

  return (
    <>
      <Form ref={formRef}>
        {errorMessage && (
          <ErrorMessage>
            {errorMessage.split('\n').map(message => <p key={message}>{message}</p>)}
          </ErrorMessage>
        )}

        {successMessage}
        <GroupForm>
          <label htmlFor="userName">Nombre de usuario</label>
          <Input id="userName" type="text" name="usuario"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="firstname">Nombre(s)</label>
          <Input id="firstname" type="text" name="nombre"/>
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

import CreateProviderStyled, { BtnCreateProvider } from './CreateProviderStyled'
import Form, { GroupForm, Input } from '../../../Global-styles/Components/Forms'
import Button from '../../../Components/Button'
import { createValidatorProvider } from '../../../utils/validationForms'
import ErrorMessage from '../../../Components/ErrorMessage'

import { collectFormData, validateData } from '../../../utils'
import { useRef, useContext, useState } from 'react'
import { useLocation } from 'wouter'
import PropTypes from 'prop-types'
import { FirebaseContext } from '../../../firebase/init'
import { collection, addDoc } from 'firebase/firestore'

const inputLabels = {
  completeName: 'Nombre completo'.split(''),
  phone: 'Telefono'.split(''),
  address: 'Dirección'.split(''),
  date: 'Días de entrega'.split(''),
  product: 'Producto'.split(''),
  parcel: 'Paqueteria'.split('')
}

const CreateProvider = () => {
  // const btn = () => {
  //   console.log('hola')
  // }
  const { db: firestore } = useContext(FirebaseContext)
  const { current: validationForm } = useRef(createValidatorProvider)

  const [errorMessage, setErrorMessage] = useState(null)

  const formRef = useRef(null)

  const navigate = useLocation()[1]

  const providers = async (provider) => {
    await addDoc(collection(firestore, 'Provider', provider))
  }

  const createProviderHandle = async (event) => {
    event.preventDefault()
    const data = collectFormData(formRef.current)
    const validation = Object.values(validateData(data, validationForm))

    if (validation.length) {
      validation.forEach((message) =>
        setErrorMessage((prevMessage) => `${prevMessage || ''} * ${message}\n`)
      )
      return
    }
    try {
      const provider = {
        completeName: data.completeName,
        phone: data.phone,
        product: data.product,
        address: data.address,
        date: data.date,
        parcel: data.parcel

      }

      await providers(provider)
      navigate('providers')
    } catch (error) {
      console.error('Error creando el proveedor', error)
      setErrorMessage('Error creando el proveedor')
    }
  }

  return (
    <CreateProviderStyled>
      <Form
        className='boxshadow'
        ref={formRef}
        styledModified={{
          width: '80rem',
          height: '20rem',
          top: '1rem',
          justify: 'space-evenly',
          padding: '40px 20px'
        }}>
        {errorMessage && (
          <ErrorMessage>
            {errorMessage.split('\n').map(message => <p key={message}>{message}</p>)}
          </ErrorMessage>
        )}
        <GroupForm className='my-2' >
          <Input type='text'
            name='completeName'
            alt='completeName'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.completeName}>
            {inputLabels.completeName.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>

        <GroupForm className='my-2' left='13rem'>
          <Input type='text'
            name='phone'
            alt='phone'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.phone}>
            {inputLabels.phone.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2' left='18.2rem'>
          <Input type='text'
            name='product'
            alt='product'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.product}>
            {inputLabels.product.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2' right='58rem' top='7rem' >
          <Input type='text'
            name='address'
            alt='address'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.address}>
            {inputLabels.address.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2' bottom='3rem' left='19rem' >
          <Input type='text'
            name='date'
            alt='date'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.date}>
            {inputLabels.date.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>

        <GroupForm className='my-2' bottom='3rem' left='12rem' >
          <Input type='text'
            name='parcel'
            alt='parcel'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.parcel}>
            {inputLabels.parcel.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <BtnCreateProvider>
          <Button size='medium' type='submit' onClick={createProviderHandle}>Crear</Button>
        </BtnCreateProvider>
      </Form>
    </CreateProviderStyled>
  )
}

export default CreateProvider

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

import { collection, addDoc } from 'firebase/firestore'
import PropTypes from 'prop-types'
import { useRef, useContext, useState } from 'react'
import { useLocation } from 'wouter'

import { CreateProviderStyled, BtnCreateProvider } from './CreateProviderStyled'

import { Button } from '../../../Components/Button'
import { ErrorMessage } from '../../../Components/ErrorMessage'
import { FirebaseContext } from '../../../Context/Firebase'
import { Form, GroupForm, Input } from '../../../Global-styles/Components/Forms'
import { collectFormData, validateData } from '../../../utils'
import { createValidatorProvider } from '../../../utils/validationForms'


const inputLabels = {
  completeName: 'Nombre completo'.split(''),
  phone: 'Telefono'.split(''),
  address: 'Dirección'.split(''),
  date: 'Días de entrega'.split(''),
  product: 'Producto'.split(''),
  parcel: 'Paqueteria'.split('')
}

export const CreateProvider = () => {
  const { db: firestore } = useContext(FirebaseContext)
  const { current: validationForm } = useRef(createValidatorProvider)

  const [errorMessage, setErrorMessage] = useState(null)
  const [phoneError, setPhoneError] = useState(null)

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
      navigate('resources')
    } catch (error) {
      setErrorMessage('Error creando el proveedor')
    }
  }

  const validatePhoneLength = (event) => {
    const phone = event.target.value.trim()
    if (phone.length !== 10) {
      setPhoneError('El numero telefonico tiene que tener solo 10 dijitos')
    } else {
      setPhoneError(null)
    }
  }
  return (
    <CreateProviderStyled >
      <Form
        ref={formRef}
        styledModified={{
          width: '70rem',
          height: '20rem',
          top: '1rem',
          left: '10rem',
          justify: 'space-evenly',
          padding: '30px 15px'
        }}>
        {errorMessage && (
          <ErrorMessage>
            {errorMessage.split('\n').map(message => <p key={message}>{message}</p>)}
          </ErrorMessage>
        )}
        <GroupForm className='my-2' left='4.5rem' >
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

        <GroupForm className='my-2' left='7.5rem'>
          <Input type='text'
            name='phone'
            alt='phone'
            required
            onBlur={validatePhoneLength}/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.phone}>
            {inputLabels.phone.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
            {phoneError && <ErrorMessage>{phoneError}</ErrorMessage>}
          </label>
        </GroupForm>
        <GroupForm className='my-2' left='10.2rem'>
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
        <GroupForm className='my-2' right='47rem' top='7rem' >
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
        <GroupForm className='my-2' bottom='3rem' left='13.5rem' >
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

        <GroupForm className='my-2' bottom='3rem' left='4.5rem' >
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

import CreateProductStyled, { BtnCharget, BtnCreate, Description, Image, ContainerImage } from './CreateStyled'
import Form, { GroupForm, Input } from '../../../Global-styles/Components/Forms'
import Button from '../../../Components/Button'
import ErrorMessage from '../../../Components/ErrorMessage'

import PropTypes from 'prop-types'
import { useContext, useRef, useState } from 'react'
import { collectFormData, validateData } from '../../../utils'

import { createValidatorProduct } from '../../../utils/validationForms'
import { useLocation } from 'wouter'

import { FirebaseContext } from '../../../firebase/init'
import { collection, addDoc } from 'firebase/firestore'

const inputLabels = {
  category: 'Categoria'.split(''),
  productName: 'Nombre del producto'.split(''),
  color: 'Color'.split(''),
  size: 'Numero'.split(''),
  model: 'Modelo'.split(''),
  code: 'Codigo'.split(''),
  price: 'Precio'.split(''),
  description: 'Descripcion'.split('')
}

const CreateProducts = () => {
  const { db: firestore } = useContext(FirebaseContext)
  const { current: validationForm } = useRef(createValidatorProduct)

  const [errorMessage, setErrorMessage] = useState(null)

  const formRef = useRef(null)

  const navigate = useLocation()[1]

  const createProduct = async (product) => {
    await addDoc(collection(firestore, 'Products'), {
      category: product.category,
      productName: product.productName,
      color: product.color,
      size: product.size,
      model: product.model,
      code: product.code,
      price: product.price,
      description: product.description
    })
  }

  const createProductHandle = async evt => {
    evt.preventDefault()
    const data = collectFormData(formRef.current)
    const validation = Object.values(validateData(data, validationForm))

    if (validation.length) {
      validation.forEach(message => setErrorMessage((prevMessage) => `${prevMessage || ''} * ${message}\n`))
      return
    }
    try {
      await createProduct(data)
      navigate('products')
    } catch (error) {
      console.error('Error creando el producto', error)
      setErrorMessage('Error creando el producto')
    }
  }

  const btnCharget = () => {
    console.log('hola')
  }
  return (
    <CreateProductStyled>
      <Form
        ref={formRef}
        className='boxshadow'
        styledModified={{
          width: '97%',
          height: '85%',
          top: '1rem',
          justify: 'space-evenly',
          padding: '40px 20px'
        }}
      >
        {errorMessage && (
          <ErrorMessage>
            {errorMessage.split('\n').map(message => <p key={message}>{message}</p>)}
          </ErrorMessage>
        )}
        <GroupForm className='my-2'>
          <Input type='text'
            name='category'
            alt='category'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.category}>
            {inputLabels.category.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2'>
          <Input type='text'
            name='productName'
            alt='productName'
            width='100%'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.productName}>
            {inputLabels.productName.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2'>
          <Input type='text'
            name='color'
            alt='color'
            width='100%'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.color}>
            {inputLabels.color.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2'>
          <Input type='text'
            name='size'
            alt='size'
            width='100%'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.size}>
            {inputLabels.size.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2' left='-4.8rem'>
          <Input type='text'
            name='model'
            alt='model'
            width='100%'
            required
          />
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.model}>
            {inputLabels.model.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2' left='-9.5rem'>
          <Input type='text'
            name='code'
            alt='code'
            width='100%'
            required
          />
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.code}>
            {inputLabels.code.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2' left='-14.5rem'>
          <Input type='text'
            name='price'
            alt='price'
            width='100%'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.price}>
            {inputLabels.price.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <Description >
          <label>Descripcion</label>
          <textarea name="description" cols="30" rows="10" className='boxshadow'></textarea>
        </Description>
        <Image className='boxshadow'>
          <label >Imagen</label>
          <ContainerImage >

          </ContainerImage>
        </Image>
        <BtnCreate>
          <div>
            <Button size='medium' type='submit' onClick={createProductHandle} >Crear</Button>
          </div>
        </BtnCreate>
        <BtnCharget>
          <div>
            <Button size='medium' type='submit' onClick={btnCharget} >Cargar</Button>
          </div>
        </BtnCharget>
      </Form>
    </CreateProductStyled>
  )
}

export default CreateProducts
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

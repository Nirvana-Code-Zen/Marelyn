import CreateProductStyled, { BtnCreate, ChargetImage, Description, Image, UploadImage } from './CreateStyled'
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
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const inputLabels = {
  category: 'Categoria'.split(''),
  productName: 'Nombre del producto'.split(''),
  color: 'Color'.split(''),
  size: 'Numero'.split(''),
  model: 'Modelo'.split(''),
  code: 'Codigo'.split(''),
  price: 'Precio'.split(''),
  description: 'Descripción'.split('')
}

const CreateProducts = () => {
  const { db: firestore, storage } = useContext(FirebaseContext)
  const { current: validationForm } = useRef(createValidatorProduct)

  const [errorMessage, setErrorMessage] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  const formRef = useRef(null)

  const navigate = useLocation()[1]

  // const generateId = async () => {
  //   const counterSnaposhot = await firestore.collection('counter').doc('product').get()
  //   const counter = counterSnaposhot.data().value
  //   const newCounter = counter + 1
  //   await firestore.collection('counter').doc('product').update({ value: newCounter })
  //   return newCounter
  // }
  const generateId = () => {
    let id = ''
    for (let i = 0; i < 8; i++) {
      id += Math.floor(Math.random() * 10)
    }
    return id
  }

  const createProduct = async (product) => {
    await addDoc(collection(firestore, 'Products'), product)
  }

  const createProductHandle = async (evt) => {
    evt.preventDefault()
    const data = collectFormData(formRef.current)
    const validation = Object.values(validateData(data, validationForm))

    if (validation.length) {
      validation.forEach((message) =>
        setErrorMessage((prevMessage) => `${prevMessage || ''} * ${message}\n`)
      )
      return
    }

    try {
      const newId = await generateId()
      const product = {
        id: newId,
        category: data.category,
        productName: data.productName,
        color: data.color,
        size: data.size,
        model: data.model,
        code: data.code,
        price: data.price,
        description: data.description
      }

      await createProduct(product)
      navigate('products')
    } catch (error) {
      console.error('Error creando el producto', error)
      setErrorMessage('Error creando el producto')
    }
  }
  const handleUpload = async () => {
    if (selectedImage) {
      const storageRef = ref(storage, 'images/' + selectedImage.name)
      await uploadBytes(storageRef, selectedImage)
      const downloadURL = await getDownloadURL(storageRef)
      setImageUrl(downloadURL)
    }
  }

  return (
    <CreateProductStyled>
      <Form
        ref={formRef}
        styledModified={{
          width: '97%',
          height: '29rem',
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
        <GroupForm className='my-2' left='2.8rem'>
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
        <GroupForm className='my-2' left='6rem'>
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
        <GroupForm className='my-2' left='8.5rem'>
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
        <GroupForm className='my-2' left='11.5rem'>
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
        <GroupForm className='my-2' right='66.4rem' top='5.8rem'>
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
        <GroupForm className='my-2' left='6rem'>
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
        <GroupForm className='my-2' right='8.8rem'>
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
        <Image >
          <label >Imagen</label>
          {imageUrl
            ? (
              <img src={imageUrl} alt='uploaded image'/>
            )
            : (
              <UploadImage/>
            )}
          <span onClick={handleUpload}>Editar</span>
        </Image>
        <ChargetImage>
          <label htmlFor="fileInput" className='fileButton'>Seleccionar imagen</label>
          <input id='fileInput' className='fileButton' type="file" onChange={(e) => setSelectedImage(e.target.files[0])} />
        </ChargetImage>
        <BtnCreate>
          <Button size='medium' type='submit' onClick={createProductHandle} >Crear</Button>
        </BtnCreate>

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

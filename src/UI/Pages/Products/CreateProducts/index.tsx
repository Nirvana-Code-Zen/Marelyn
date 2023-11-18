import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'
import PropTypes from 'prop-types'
import { useContext, useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useLocation } from 'wouter'

import { Button } from '../../../Components/Button'
import { ErrorMessage } from '../../../Components/ErrorMessage'
import { FirebaseContext } from '../../../Context/Firebase'
import { Form, GroupForm, Input } from '../../../Global-styles/Components/Forms'
import { collectFormData, validateData } from '../../../utils'
import { createValidatorProduct } from '../../../utils/validationForms'


import { CreateProductStyled, BtnCreate, ChargetImage, Description, Image, UploadImage } from './CreateStyled'

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

export const CreateProducts = () => {
  const { db: firestore, storage } = useContext(FirebaseContext)
  const { current: validationForm } = useRef(createValidatorProduct)

  const [errorMessage, setErrorMessage] = useState(null)
  const [productId, setProductId] = useState('')
  const [seletedImage, setSeletedImage] = useState(null)

  const formRef = useRef(null)

  const navigate = useLocation()[1]

  useEffect(() => {
    generateId()
  }, [])

  const generateId = () => {
    const newId = uuidv4()
    setProductId(newId)
  }

  const generateIdImage = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let randomId = ''

    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      randomId += characters.charAt(randomIndex)
    }

    return randomId
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
      const product = {
        id: productId,
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
      setErrorMessage('Error creando el producto')
    }
  }
  const uploadFile = async (file) => {
    const imageId = generateIdImage(8)
    const stoprageRef = ref(storage, `galeryProducts/${imageId}`)
    try {
      await uploadBytes(stoprageRef, file)
      setSeletedImage(URL.createObjectURL(file))
    } catch (error) {
      setErrorMessage('Error creando el producto')
    }

    uploadBytes(stoprageRef, file).then(_ => {})
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
        <GroupForm className='my-2' right='66.4rem' top='6.5rem'>
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

          <UploadImage>
            {seletedImage && <img src={seletedImage} alt="Selected" />}
          </UploadImage>

          <span >Editar</span>
        </Image>
        <ChargetImage>
          <label htmlFor="fileInput" className='fileButton'>Seleccionar imagen</label>
          <input id='fileInput' className='fileButton' type="file" onChange={(e) => uploadFile(e.target.files[0])} />
        </ChargetImage>
        <BtnCreate>
          <Button size='medium' type='submit' onClick={createProductHandle} >Crear</Button>
        </BtnCreate>

      </Form>
    </CreateProductStyled>
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

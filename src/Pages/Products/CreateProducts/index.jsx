import { BtnCreate } from './CreateStyled'
import Form, { GroupForm, Input } from '../../../Global-styles/Components/Forms'
import Button from '../../../Components/Button'

import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { FirebaseContext } from '../../../firebase/init'
import { collection, addDoc } from 'firebase/firestore'

const CreateProducts = () => {
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
  const { firestore } = useContext(FirebaseContext)

  const [productData, setProductData] = useState({
    category: '',
    productName: '',
    color: '',
    size: '',
    model: '',
    code: '',
    price: '',
    description: ''
  })

  const createProduct = async evt => {
    evt.preventDefault()

    try {
      await addDoc(collection(firestore, 'Products'), productData)
    } catch (error) {
      console.log(error)
    }
  }
  const handleInputChange = evt => {
    setProductData({
      ...productData,
      [evt.target.name]: evt.target.value
    })
  }
  return (
<>
    <Form
     className='boxshadow'
      styledModified={{
        width: '80%',
        height: '60%',
        justify: 'space-evenly',
        top: '130px',
        padding: '40px 20px'
      }}
    >
      <GroupForm className='my-2'>
        <Input type='text'
        name='category'
        alt='category'
        value={productData.category}
        onChange={handleInputChange}/>
        <span className='bar'></span>
          <label>
            {inputLabels.category.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
      </GroupForm>
      <GroupForm className='my-2'>
        <Input type='text'
        name='productName'
        alt='productName'
        value={productData.productName}
        onChange={handleInputChange}/>
        <span className='bar'></span>
          <label>
            {inputLabels.productName.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
      </GroupForm>
      <GroupForm className='my-2'>
        <Input type='text'
        name='color'
        alt='color'
        value={productData.color}
        onChange={handleInputChange}/>
        <span className='bar'></span>
          <label>
            {inputLabels.color.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
      </GroupForm>
      <GroupForm className='my-2'>
        <Input type='text'
        name='size'
        alt='size'
        value={productData.size}
        onChange={handleInputChange}/>
        <span className='bar'></span>
          <label>
            {inputLabels.size.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
      </GroupForm>
      <GroupForm className='my-2'>
        <Input type='text'
        name='model'
        alt='model'
        value={productData.model}
        onChange={handleInputChange}/>
        <span className='bar'></span>
          <label>
            {inputLabels.model.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
      </GroupForm>
      <GroupForm className='my-2'>
        <Input type='text'
        name='code'
        alt='code'
        value={productData.code}
        onChange={handleInputChange}/>
        <span className='bar'></span>
          <label>
            {inputLabels.code.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
      </GroupForm>
      <GroupForm className='my-2'>
        <Input type='text'
        name='price'
        alt='price'
        value={productData.price}
        onChange={handleInputChange}/>
        <span className='bar'></span>
          <label>
            {inputLabels.price.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
      </GroupForm>
      <GroupForm className='my-2'>
        <Input type='text'
        name='description'
        alt='description'
        value={productData.description}
        onChange={handleInputChange}/>
        <span className='bar'></span>
          <label>
            {inputLabels.description.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
      </GroupForm>
        <BtnCreate>
          <div>
            <Button size='medium' type='submit' onClick={createProduct} >Crear</Button>
          </div>
      </BtnCreate>
    </Form>

</>
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

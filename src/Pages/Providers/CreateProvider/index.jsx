import CreateProductStyled, { BtnCreateProvider } from '../../Products/CreateProducts/CreateStyled'
import Form, { GroupForm, Input } from '../../Global-styles/Components/Forms'
import Button from '../../Components/Button'

import { useRef } from 'react'
import PropTypes from 'prop-types'

const CreateProvider = () => {
  const btn = () => {
    console.log('hola')
  }
  const formRef = useRef(null)

  const inputLabels = {
    name: 'Nombre'.split(''),
    firstName: 'Primer Apellido'.split(''),
    lastName: 'Segundo Apellido'.split(''),
    date: 'Fecha de entrega'.split(''),
    phone: 'Paqueteria'.split(''),
    address: 'Producto'.split(''),
    parcel: 'Paqueteria'.split(''),
    product: 'Producto'.split('')
  }
  return (
    <CreateProductStyled>
      <Form
        ref={formRef}
        styledModified={{
          width: '80rem',
          height: '25rem',
          top: '1rem',
          justify: 'space-evenly',
          padding: '40px 20px'
        }}>
        <GroupForm className='my-2' >
          <Input type='text'
            name='name'
            alt='name'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.name}>
            {inputLabels.name.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2' >
          <Input type='text'
            name='firstName'
            alt='firstName'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.firstName}>
            {inputLabels.firstName.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2' >
          <Input type='text'
            name='lastName'
            alt='lastName'
            required/>
          <span className='bar'></span>
          <label aria-labelledby={inputLabels.lastName}>
            {inputLabels.lastName.map((char, index) => (
              <FormSpan key={index} char={char} index={index}/>
            ))}
          </label>
        </GroupForm>
        <GroupForm className='my-2' >
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
        <GroupForm className='my-2' >
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
        <GroupForm className='my-2' >
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
        <GroupForm className='my-2' >
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
        <GroupForm className='my-2' >
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
        <BtnCreateProvider>
          <Button size='medium' type='submit' onClick={btn} >Crear</Button>
        </BtnCreateProvider>
      </Form>
    </CreateProductStyled>
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

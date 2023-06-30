import ProviderStyled from './ProviderStyled'
import Form, { GroupForm, Input } from '../../Global-styles/Components/Forms'

import PropTypes from 'prop-types'

import { useRef } from 'react'

const Providers = () => {
  const formRef = useRef(null)

  const inputLabels = {
    name: 'Nombres'.split(''),
    firstName: 'Primer Apellido'.split(''),
    lastName: 'Segundo Apellido'.split(''),
    date: 'Fecha de entrega'.split(''),
    parcel: 'Paqueteria'.split('')
  }
  return (
    <ProviderStyled>
      <Form
        ref={formRef}
        styledModified={{
          width: '97%',
          height: '85%',
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

      </Form>
    </ProviderStyled>
  )
}

export default Providers

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

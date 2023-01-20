import { createUserValidator } from './validationForms'
import { validateData } from './index'

describe('Utill', () => {
  test('Should validate data correctly', () => {
    const data = {
      nombre: 'John',
      apellido_paterno: 'Smith',
      apellido_materno: 'Doe',
      email: 'edgar@gmail.com'
    }

    const expected = { }

    expect(validateData(data, createUserValidator)).toEqual(expected)
  })

  test('Should validate data incorrectly', () => {
    const data = {
      nombre: 'John',
      apellido_paterno: 'Smith',
      apellido_materno: '',
      email: 'edd.com'
    }

    const expected = { apellido_materno: 'apellido materno es requerido', email: 'email formato incorrecto' }
    expect(validateData(data, createUserValidator)).toEqual(expected)
  })
})

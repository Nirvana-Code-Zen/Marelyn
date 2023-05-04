export const createUserValidator = {
  usuario: /\w+/,
  nombre: /\w+/,
  apellido_materno: /\w+/,
  apellido_paterno: /\w+/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  contrasena: /^(\w*\d?\S?){6,16}$/,
  confirmar_contrasena: /^(\w*\d?\S?){6,16}$/
}

export const validatorAccessLogin = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  contrasena: /^(\w*\d?\S?){6,16}$/
}

export const createValidatorProduct = {
  category: /\w+/,
  productName: /\w+/,
  color: /\w+/,
  size: /\d+(\.\d+)?/,
  model: /\w+/,
  code: /^\d+$/,
  price: /\d+(\.\d+)?/,
  description: /\w+/
}

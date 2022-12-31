export const createUserValidator = {
  tipo_cuenta: /\w+/,
  usuario: /\w+/,
  nombre: /\w+/,
  apellido_materno: /\w+/,
  apellido_paterno: /\w+/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  contrasena: /\w+/,
  confirmar_contrasena: /^(\w*\d?\S?){6,16}$/
}

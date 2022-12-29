import Form, { Input } from '../../Global-styles/Components/Forms'
import H4 from '../../Global-styles/Components/Titles'

export default function Login () {
  const btnEntrar = e => {
    e.preventDefault()
    console.log('Soy un boton')
  }

  const createUsuari = e => {
    e.preventDefault()
    console.log('Necesito terminar la funcion de crear')
  }

  return (
  <div>
    <H4>Login</H4>
     <Form>
       <div>
         <label>Correo </label>
         <Input type="text" name="name" required className=''/>
       </div>
       <div>
         <label>Contraseña </label>
         <Input type="password" name="password" required className=''/>
       </div>
       <label className='password'> <a href="">Olvidaste tu contraseña?</a> </label>
       <div>
       </div>
       <div className="btns">
        <button className='borderRadius button' onClick={btnEntrar}>Entrar</button>
        <button className='borderRadius button' onClick={createUsuari}>Crear usuario</button>
      </div>
     </Form>
   </div>
  )
}

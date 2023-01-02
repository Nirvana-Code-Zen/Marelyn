import Form, { Input } from '../../Global-styles/Components/Forms'
import H4 from '../../Global-styles/Components/Titles/H4'
import Button from '../../Components/Button'

export default function Login () {
  const btnEntrar = e => {
    e.preventDefault()
    console.log('Soy un boton')
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
       <div >
      <Button onClick={btnEntrar} $width_sizing='wTen'>Entrar</Button>
      </div>
     </Form>
   </div>
  )
}

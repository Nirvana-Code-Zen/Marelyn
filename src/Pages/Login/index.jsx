import '../Login/Login.css'

export default function Login () {
  const btn = document.querySelector('.btn-entrar')
  const btnEntrar = () => {
    btn.addEventListener('click', () => {
      console.log('Soy un botn ')
    })
  }

  return <div className="form-login">
     <h4>Login</h4>
     <form>
       <div className="input-login">
         <label className='text-form'>Correo </label>
         <input type="text" name="name" required className='inputs'/>
       </div>
       <div className="input-login">
         <label className='text-form'>Contraseña </label>
         <input type="password" name="password" required className='inputs'/>
       </div>
       <label className='passwords'> <a href="">Olvidaste tu contraseña?</a> </label>
       <div>
       </div>
       <div className="btns">
          <input type="submit" value='Crear usuario' className='btn-create' onClick={btnEntrar} />
          <input type="submit" value='Entrar' className='btn-entrar' onClick={btnEntrar}/>
        </div>
     </form>
   </div>
}

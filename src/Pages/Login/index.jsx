export default function Login () {
  const btnEntrar = () => {
    console.log('Soy un boton')
  }
  const createUsuari = () => {
    console.log('Necesito terminar la funcion de crear')
  }

  return <div className="">
     <h4 className='width'>Login</h4>
     <form>
       <div className="">
         <label className=''>Correo </label>
         <input type="text" name="name" required className=''/>
       </div>
       <div className="">
         <label className='text-form'>Contraseña </label>
         <input type="password" name="password" required className=''/>
       </div>
       <label className='password'> <a href="">Olvidaste tu contraseña?</a> </label>
       <div>
       </div>
       <div className="btns">
        <input type="submit" value='Crear usuario' className='borderRadius' onClick={createUsuari} />
        <input type="submit" value='Entrar' className='borderRadius' onClick={btnEntrar}/>
      </div>
     </form>
   </div>
}

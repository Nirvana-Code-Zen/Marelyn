import Button from '../../Components/Button'
import { GroupForm, Input } from '../../Global-styles/Components/Forms'
import SignupStyled from '../Singup/SignupStyled'

const SingUp = () => {
  return (
    <>
      <SignupStyled>
        <GroupForm>
          <label htmlFor="mail">Tipo de cuenta</label>
          <Input id="mail" type="text"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="mail">Nombre de usuario</label>
          <Input id="mail" type="text"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="mail">Apellido Paterno</label>
          <Input id="mail" type="text"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="mail">Apellido Materno</label>
          <Input id="mail" type="text"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="mail">Correo</label>
          <Input id="mail" type="text"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="mail">Contraseña</label>
          <Input id="mail" type="text"/>
        </GroupForm>
        <GroupForm>
          <label htmlFor="mail">Confirma contraseña</label>
          <Input id="mail" type="text"/>
        </GroupForm>
        <GroupForm>
        </GroupForm>
        <Button onClick={() => {}}>Crear</Button>
      </SignupStyled>
    </>
  )
}

export default SingUp

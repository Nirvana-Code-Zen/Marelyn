import Button from '../../Components/Button'
import Form, { GroupForm, Input } from '../../Global-styles/Components/Forms'

const SingUp = () => {
  return (
    <>
      <Form>
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
        <Button>Crear</Button>
      </Form>
    </>
  )
}

export default SingUp

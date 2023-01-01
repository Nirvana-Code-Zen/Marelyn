import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin:auto;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 25px;
`

export const GroupForm = styled.div`
  & label {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 1.3rem;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 3px 1px ${props => props.theme.colors.primary};
  font-size: 1.1rem;
  outline: none;
`

export const Select = styled.select``

export const Option = styled.option``

export default Form

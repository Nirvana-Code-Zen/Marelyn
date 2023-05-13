import styled from 'styled-components'

const CreateProductStyled = styled.div`
    height: 28rem;
    display: flex;
    width: 85%;
    flex-wrap: wrap;
    border: 1px solid blue;
    
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap:1.2rem;
    width: 68%;
    height: 15rem;

    & label{
      font-family: ${props => props.theme.fonts.texts_titles};
      letter-spacing: 2px;
      color: ${props => props.theme.colors.texts};
      position: relative;
      left: .2rem;
    }
    & textarea{
      font-family: ${props => props.theme.fonts.texts_titles};
      font-size: ${props => props.theme.fonts_sizes.medium_text};
      letter-spacing: 3px;
      border: transparent;
      width: 100%;
      height: 10.5rem;
      padding: 1rem;
      box-sizing: border-box;
      resize: none;
    }

    & textarea:focus{
    border: ${props => props.theme.colors.secondary};
    }
`

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 16rem;
  position: relative;
  bottom: 2.3rem;
  padding: 1rem;
  box-sizing: border-box;

    & label{
      position: relative;
      left: 5rem;
      bottom: 3rem;
      font-family: ${props => props.theme.fonts.texts_titles};
      letter-spacing: 2px;
      color: ${props => props.theme.colors.texts};
    }
 
`

export const ContainerImage = styled.div`
  height: 9rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
`
export const BtnCreate = styled.div`
  flex-basis: 100%;

  & div {
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 1rem;
  }
`

export const BtnCharget = styled.div`
  position: relative;
  left: 28.8rem;
  bottom:7.5rem;

  & input {
    width: 100%;
    background-color: red;
  }
`
export default CreateProductStyled

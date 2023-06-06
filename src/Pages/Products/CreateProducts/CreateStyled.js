import styled from 'styled-components'

const CreateProductStyled = styled.div`
  width: 100%;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap:1.2rem;
  width: 58.7rem;
  position: relative;
  left: 3rem;
  bottom: 1.5rem;

  & label{
    font-family: ${props => props.theme.fonts.texts_titles};
    letter-spacing: 0.12rem;
    color: ${props => props.theme.colors.texts};
    position: relative;
    left: .2rem;
  }
  & textarea{
    font-family: ${props => props.theme.fonts.texts_titles};
    font-size: ${props => props.theme.fonts_sizes.medium_text};
    letter-spacing: 0.18rem;
    border: transparent;
    width: 100%;
    height: 12rem;
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
  width: 17rem;
  height: 16rem;
  position: relative;
  bottom: 2.3rem;
  left: 7rem;
  padding: 1rem;
  box-sizing: border-box;

  & label{
    position: relative;
    left: 5rem;
    bottom: 3rem;
    font-family: ${props => props.theme.fonts.texts_titles};
    letter-spacing: 0.12rem;
    color: ${props => props.theme.colors.texts};
  }
`

export const ContainerImage = styled.div`
  height: 9rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 0.31rem;
`
export const BtnCreate = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 4rem;
`

export const BtnCharget = styled.div`
  position: relative;
  right: 6.8rem;
  top: 3rem;

  & input {
    width: 100%;
    background-color: red;
  }
`
export default CreateProductStyled

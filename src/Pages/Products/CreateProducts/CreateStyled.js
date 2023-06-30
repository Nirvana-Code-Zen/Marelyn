import styled from 'styled-components'

const CreateProductStyled = styled.div`
  width: 100%;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap:1.2rem;
  width: 57rem;
  position: relative;
  right: 11.5rem;

  & label{
    font-family: ${props => props.theme.fonts.texts_titles};
    letter-spacing: 0.12rem;
    color: ${props => props.theme.colors.texts};
    position: relative;
    left: .3rem;
  }
  & textarea{
    font-family: ${props => props.theme.fonts.texts_titles};
    font-size: ${props => props.theme.fonts_sizes.medium_text};
    letter-spacing: 0.18rem;
    border: transparent;
    width: 100%;
    height: 7rem;
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
  width: 19.5rem;
  height: 17rem;
  position: relative;
  bottom: 11.3rem;
  padding: 1rem;
  box-sizing: border-box;

  & label{
    position: relative;
    left:  -0.8rem;
    bottom: 3rem;
    font-family: ${props => props.theme.fonts.texts_titles};
    letter-spacing: 0.12rem;
    color: ${props => props.theme.colors.texts};
  }

  & span{
    padding-top: 1.5rem;
    cursor: pointer;
  }
   & span:hover{
    color: ${props => props.theme.colors.secondary};
    font-size: ${props => props.theme.fonts_sizes.medium_text};
   }
`

export const UploadImage = styled.div`
  height: 10.5rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 0.31rem;

  & span{
    text-align: center;
  }
`
export const BtnCreate = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 4rem;
`

export const ChargetImage = styled.div`
    border: 1px dashed ${props => props.theme.colors.secondary} ;
    height: 4.5rem;
    width: 57rem;
    position: relative;
    bottom: 5rem;

    & input{
      padding: 0.5rem;
    }
`
export default CreateProductStyled

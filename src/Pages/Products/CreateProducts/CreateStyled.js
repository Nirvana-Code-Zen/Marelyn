import styled from 'styled-components'

const CreateProductStyled = styled.div`
  width: 100%;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap:1.2rem;
  width: 56.5rem;
  position: relative;
  top: -2.5rem;
  left: 3rem;

  & label{
    font-family: ${props => props.theme.fonts.texts_titles};
    letter-spacing: 0.12rem;
    color: ${props => props.theme.colors.texts};

  }
  & textarea{
    font-family: ${props => props.theme.fonts.texts_titles};
    font-size: ${props => props.theme.fonts_sizes.medium_text};
    letter-spacing: 0.18rem;
    border: transparent;
    width: 100%;
    height: 10rem;
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
  box-sizing: border-box;
 

  & label{
    position: relative;
    left:  6.5rem;
    bottom: 4.4rem;
    font-family: ${props => props.theme.fonts.texts_titles};
    letter-spacing: 0.12rem;
    color: ${props => props.theme.colors.texts};
  }

  & span{
    cursor: pointer;
    position: relative;
    bottom: 3rem;
    left: 6rem;
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
  position: relative;
  bottom: 3.8rem;
  left: 6rem;

  & span{
    text-align: center;
  }
`
export const BtnCreate = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  width: 10rem ;
  position: absolute;
  bottom: 4rem;
`

export const ChargetImage = styled.div`
    height: 4rem;
    width: 7rem;
    position: relative;
    top: 4.5rem;
    left: -10rem;
    padding-bottom: 05.rem;

    & label{
      text-align: center;
    }
    & input[type='file'] {
      padding-top:1.5rem;
      display: none;
    }

    & .fileButton{
      display: inline-block;
      width: 10rem;
      padding: 0.5rem 0.5rem 0.5rem 1rem;
      background-color: ${props => props.theme.colors.secondary};
      color: #fff;
      cursor: pointer;
      border: none;
      border-radius: 10px;
    }
`
export default CreateProductStyled

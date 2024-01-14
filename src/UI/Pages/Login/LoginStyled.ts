import styled from 'styled-components'

export const LoginStyled = styled.div`
  display: flex; 
  font-family: ${props => props.theme.fonts.texts_titles};
  
  & label{
    font-size: ${props => props.theme.fonts_sizes.extra_small_texts};
    color: ${props => props.theme.colors.texts_secondary};
    cursor: pointer;
  }
`

export const ContainerBannerStyled = styled.div`
  width: 60vw;
  height: 100vh;
  overflow: hidden;

  & img {
  width: 100%;
  height: 100%;
  object-fit: contain;

}`

export const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  & .image-logo{
    width: 9rem;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.primary}

  }

  & img{
    width: 100%;
    height: 100%;
  }
`

export const ContainerMainForm = styled.div`
  height: 50vh;
  padding-top: 3rem;
`
export const ContainerFormLoginStyled = styled.div`
  width:40vw ;
  height: 100vh;
  display: flex;
  flex-direction: column;
`


export const SocialContentStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  & label{
    color: ${props => props.theme.colors.texts};
  }
`
export const ContainerNewtwork = styled.button`
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  & img{
    width: 2rem;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;

  & label {
    padding-top: 1.5rem;
  }
`
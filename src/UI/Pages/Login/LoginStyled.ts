import styled from 'styled-components'

export const LoginStyled = styled.div`
  display: flex; 
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

export const ContainerFormLoginStyled = styled.div`
  width:40vw ;
  height: 100vh;
  border: 1px solid red;
`
export const SocialContentStyled = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  gap: 1.87rem;
  cursor: pointer;
`
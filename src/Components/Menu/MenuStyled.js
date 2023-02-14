import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 280px;
  height: 100vh ;
  align-items: left;
  background-color: ${props => props.theme.colors.primary};
  transition: max-width .3s ease;
  
  & span{
    font-size: ${props => props.theme.fonts_sizes.medium_texts};
    font-family: ${props => props.theme.fonts.texts_titles};
    letter-spacing: 4px;
    padding-left: 35px;
    cursor: pointer;
    text-align: center;
    transition: all .3s ease;
    color: white;
  }
`

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  width: 100%;
  transition: all .3s ease;
  border-radius: 8px;
  height: 70px;
  
  &:hover{
    background: ${props => props.theme.colors.secondary};
    opacity: 90%;
    cursor: pointer;
  }
 
`

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 25px 0 25px;
  gap: 10px;
`

export const H2 = styled.h2`
  display: flex;
  font-size: ${props => props.theme.fonts_sizes.medium_text};
  text-align: center;
  font-family: ${props => props.theme.fonts.texts_titles};
  letter-spacing: 4px;
  margin-top: 20px;
  color: ${props => props.theme.colors.white};
`

// export const ContainerSearch = styled.div`
//     padding-top:30px ;
//     padding-left: 20px;
//     & input {
//     width: 65%;
//     height: 30px;
//     border-radius: 10px;
//     margin-top: 19px;
//     margin-left: -4px;
//     border: 2px solid white;
//     position: relative;
//     padding: 5px 0 5px 65px;
//     background-color: ${props => props.theme.colors.hover_search};
//     cursor: pointer;
//     font-size: ${props => props.theme.fonts_sizes.medium_text};
//     color: ${props => props.theme.colors.secondary};

//   &:placeholder-shown {
//     background-color: transparent;
//     font-size: ${props => props.theme.fonts_sizes.medium_text};
//     letter-spacing: 5px;
//     }

//     &::placeholder{
//       color: white;
//     }
// //   }
// `

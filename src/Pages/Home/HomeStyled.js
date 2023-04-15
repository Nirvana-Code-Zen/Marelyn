import styled from 'styled-components'

const Home = styled.div`
  background-color: aliceblue;
  height: 100vh;

  @media (max-width: 768px){
    background-color: pink;

    & H1{
      color: red;
      font-size: ${props => props.theme.fonts_sizes.medio_titles}
    }
  }

  @media (max-width: 360px){
    background-color: orange;

    & H1{
      color: red;
      font-size: ${props => props.theme.fonts_sizes.small_titles}
    }
    
   
  }
`

export default Home

import styled from 'styled-components'

const Home = styled.div`
  height: 100vh;

  @media (max-width: 48rem){
    background-color: pink;

    & H1{
      color: red;
      font-size: ${props => props.theme.fonts_sizes.medio_titles}
    }
  }
  @media (max-width: 22.5rem){
    background-color: orange;
    
    & H1{
      color: red;
      font-size: ${props => props.theme.fonts_sizes.small_titles}
    }
  }
`

export default Home

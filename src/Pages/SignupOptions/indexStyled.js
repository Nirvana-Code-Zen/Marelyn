import styled from 'styled-components'
import H1 from '../../Global-styles/Components/Titles'

const SignUpOptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  margin: 10rem auto;
  padding: 1em;
  background: #F4F6FB;
  border: 1px solid white;
  box-shadow: 10px 10px 64px 0px rgba(180, 180, 207, 0.75);

  svg {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 20px;
    margin-right: 5px;
  }
`

export const ButtonContainer = styled.div`
  margin: 15px 20px
`

export const SignUpHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SignUpTitle = styled(H1)`
  padding-bottom: 20px;
  font-size: ${props => props.theme.fonts_sizes.small_subtitles};
  color: ${props => props.theme.colors.primary};
`

export default SignUpOptionsStyled

import styled from 'styled-components'

import { H1 } from '../../Global-styles/Components/Titles'

export const SignUpOptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 25rem;
  margin: 10rem auto;
  padding: 1em;
  background: #F4F6FB;
  border: 1px solid white;
  box-shadow: 0.62rem 0.62rem 4rem 0px rgba(180, 180, 207, 0.75);

  svg {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1.25rem;
    margin-right: 5px;   
  }
`

export const ButtonContainer = styled.div`
  margin: 0.93rem 1.25rem;
`

export const SignUpHeader = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SignUpTitle = styled(H1)`
  padding-bottom: 1.25rem;
  font-size: ${props => props.theme.fonts_sizes.small_subtitles};
  color: ${props => props.theme.colors.primary};
`
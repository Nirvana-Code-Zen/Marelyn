import styled from 'styled-components'

export const HeaderStyles = styled.header`
  position: relative;
  background: linear-gradient(45deg, rgb(168 141 72), rgb(32 33 36));
  width: 100%;
  height: 6.25rem;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.texts_titles};

  & img {
    position: ${props => props.position || 'absolute'};
    left:  ${props => props.left || '8.5rem'};
    height: 100%;
  }

  & h1 {
    color: white;
  }
`

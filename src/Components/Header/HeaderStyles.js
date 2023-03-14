import styled from 'styled-components'

export default styled.header`
  position: relative;
  background: linear-gradient(45deg, rgb(168 141 72), rgb(32 33 36));
  width: 100%;
  height: 100px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.fonts.texts_titles};

  & img {
    position: ${props => props.position || 'absolute'};
    left:  4.5rem;
    top: ${props => props.top};
    height: 100%;
    transform: translateX(${props => props.translateAxisX || '0px'});
  }

  & h1 {
    color: white;
  } 
`

import styled from 'styled-components'

const imageSize = {
  extraSmall: '20px',
  small: '30px',
  medium: '40px',
  large: '60px',
  extraLarge: '80px'
}
export default styled.img`
  display: flex ;
  flex-wrap: wrap;
  width: ${props => imageSize[props.size]};
  height:${props => imageSize[props.size]};
  transition: max-width .3s ease;
  cursor: pointer;
  margin: ${props => props.margin};
  position: ${props => props.position};

`

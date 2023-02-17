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
  width: ${props => imageSize[props.size]};
  height:${props => imageSize[props.size]};
  margin-left: ${props => props.margin};
  cursor: pointer;


`

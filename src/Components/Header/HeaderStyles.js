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

  & img {
    position: absolute;
    left: 1rem;
    height: 100%;
  }
`

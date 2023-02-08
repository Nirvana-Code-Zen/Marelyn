import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 200px;
  height: calc(100vh - 100px);
  align-items: left;
  padding: 10px 15px;
  background-color: ${props => props.theme.colors.primary};
  filter: opacity(80%);
  filter: saturate(90%);

  & p{
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fonts_sizes.texts};
    font-family: ${props => props.theme.fonts.texts_titles};
    letter-spacing: 4px;

  }

  .conteiner-menu{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    & img *{
      width: 50px;
      height: 50px;
      padding-left: 40px;
      padding-top: 7px;
    }
  }

`

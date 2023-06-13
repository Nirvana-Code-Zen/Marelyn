import styled from 'styled-components'

const ListProduct = styled.div`
  font-family: ${props => props.theme.fonts};
  font-size: ${props => props.theme.fonts_sizes.texts};
  padding-bottom:  1rem ;
  width: 100%;

  & th{
    font-size: ${props => props.theme.fonts_sizes.small_subtitles};
    background-color: ${props => props.theme.colors.secondary};
    width: 11rem;
    color: white;
  }

  & td{
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts_sizes.button_text};
    text-align: center;
    letter-spacing: 2px;
    padding: .5rem  ;

  }

  & tr:hover{
    background-color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`

export const TableProduct = styled.table`
  border-collapse: collapse;

`
export default ListProduct

import styled from 'styled-components'

export const ListProviderStyled = styled.div`
  font-family: ${props => props.theme.fonts};
  font-size: ${props => props.theme.fonts_sizes.small_subtitles};
  padding-bottom:  1rem ;
  width: 100%;

  & th{
    font-size: ${props => props.theme.fonts_sizes.medium_text};
    border-bottom:1px solid ${props => props.theme.colors.primary};
    width: 15rem;
    color: ${props => props.theme.colors.secondary};
    padding: 0.5rem 1.5rem;
    text-align: left;
  }
  & table{
    width: 100%;
    justify-content: flex-start;
  }

  & td{
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts_sizes.button_text};
    text-align: justify;
    letter-spacing: 2px;
    padding: .5rem 1.2rem ;
  }

  & tr{
      cursor: pointer;
    }
`

export const TableProvider = styled.table`
border-collapse: collapse;
`

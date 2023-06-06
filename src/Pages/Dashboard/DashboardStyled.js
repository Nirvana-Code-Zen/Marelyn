import styled from 'styled-components'

const Dashboard = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2,1fr);
  grid-gap: 1rem;
`

export const ProductsSection = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1/2;
  grid-row: 1/2;

`
export const SalesSection = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 3/4;
  grid-row: 1/3;
`
export const ReportsSection = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1/3;
  grid-row: 2/3;
`

export const OffertSection = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 2/3;
  grid-row: 1/2;
`
export default Dashboard

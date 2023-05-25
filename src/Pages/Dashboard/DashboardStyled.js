import styled from 'styled-components'

const Dashboard = styled.div`
  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(20rem, auto);
  grid-gap: .5rem;
`
// export const ContainerDashboard = styled.div`
//   display: flex;
//   width: 100%;
//   height: 78vh;
//   background-color:yellow ;
// `

export const ProductsSection = styled.div`
  display: flex;
  grid-column: 1/3;
  grid-row: 1/4;
  width: 100%;
  height: 18rem;
  background-color: red;

`
export const SalesSection = styled.div`
  grid-column: 3/6;
  grid-row: 1/4;
  width: 100%;
  height: 18rem;
  background-color: orange;
`
export const ReportsSection = styled.div`
  grid-column: 1/4;
  grid-row: 2/6;
  width: 100%;
  height: 9rem;
  background-color: greenyellow;
`
export const ClientSection = styled.div`
  grid-column: 4;
  grid-row: 2/4;
  width: 100%;
  height: 9rem;
  background-color: pink;
`
export const SupplierSection = styled.div`
  grid-column: 5/6;
  grid-row: 2/3;
  width: 100%;
  height: 9rem;
background-color: purple;
`
export const OffertSection = styled.div`
  grid-column: 5/6;
  grid-row: 3/4;
  width: 100%;
  height: 9rem;
  background-color: blue;
`
export default Dashboard

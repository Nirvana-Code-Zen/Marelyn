import DashboardStyled, { ProductsSection, SalesSection, ReportsSection, OffertSection } from './DashboardStyled'
import { H4 } from '../../Global-styles/Components/Titles'

const Dashboard = () => {
  return (
    <DashboardStyled Styled className='boxshadow'>
      <ProductsSection className='boxshadow'>
        <H4>Seccion de productos nuevos</H4>
      </ProductsSection>
      <SalesSection className='boxshadow'>
        <H4>Seccion de ventas </H4>
      </SalesSection>
      <ReportsSection className='boxshadow'>
        <H4>Seccion de reportes </H4>
      </ReportsSection>
      <OffertSection className='boxshadow'>
        <H4>Seccion de ofertas </H4>
      </OffertSection>
    </DashboardStyled>

  )
}

export default Dashboard

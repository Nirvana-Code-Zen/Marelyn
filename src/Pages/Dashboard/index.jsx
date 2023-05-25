import DashboardStyled, { ProductsSection, SalesSection, ReportsSection, ClientSection, SupplierSection, OffertSection } from './DashboardStyled'
import { H2 } from '../../Global-styles/Components/Titles'

const Dashboard = () => {
  return (
    <DashboardStyled Styled className='boxshadow'>

        <ProductsSection>
          <H2>Seccion de productos nuevos</H2>
        </ProductsSection>
        <SalesSection>
        <H2>Seccion de ventas </H2>
        </SalesSection>
        <ReportsSection>
          <H2>Seccion de reportes </H2>
        </ReportsSection>
        <ClientSection>
          <H2>Seccion de clientes </H2>
        </ClientSection>
        <SupplierSection>
          <H2>Seccion de proveedores </H2>
        </SupplierSection>
        <OffertSection>
          <H2>Seccion de ofertas </H2>
        </OffertSection>

    </DashboardStyled>

  )
}

export default Dashboard

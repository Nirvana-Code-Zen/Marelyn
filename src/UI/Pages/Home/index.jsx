import {Header} from '../../Components/Header'
import {H1} from '../../Global-styles/Components/Titles'
import {HomeStyled} from '../Home/HomeStyled'
import {Login} from '../Login'

export const Home = () => (
  <HomeStyled size='cell-phone'>
    <Header>
      <H1>Zapateria Marelyn</H1>
    </Header>
    <Login />
  </HomeStyled>
)
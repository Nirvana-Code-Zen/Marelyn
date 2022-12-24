import Login from '../Login'
import Header from '../../Components/Header'

import styles from './index.module.css'

const Home = () => (
  <div className={styles.container_app}>
    <Header/>
    <Login />
  </div>
)

export default Home

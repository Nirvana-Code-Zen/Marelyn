import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header} >
      <img src="./src/assets/logo-Marelyn.png" alt="logo-marelyn" className={styles.logo} />
      <h2>Zapateria Marelyn</h2>
    </header>
  )
}

export default Header

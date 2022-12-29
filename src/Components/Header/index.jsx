import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header} >
      <img src="./src/assets/logo-Marelyn.png" alt="logo-marelyn" className='w-9' />
      <h2>Zapateria Marelyn</h2>
    </header>
  )
}

export default Header

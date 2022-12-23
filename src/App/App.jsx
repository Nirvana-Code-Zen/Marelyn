import Login from '../Pages/Login'

import './App.css'

function App () {
  return (
    <div className="App">
      <div className='container-app'>
        <header className='header' >
          <img src="./src/assets/logo-Marelyn.png" alt="logo-marelyn" className='logo' />
          <h2>Zapateria Marelyn</h2>
        </header>
        <Login></Login>
      </div>
    </div>
  )
}

export default App

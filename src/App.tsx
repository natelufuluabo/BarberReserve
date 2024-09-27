import './App.css'
import Login from './login/Login'
import Signup from './signup/Signup'

function App() {

  return (
    <div className='rootContainer'>
      <div className='topBar'>
        <h1 className='logo'>Reserv <strong>Ease</strong></h1>
      </div>
      {/* <Login /> */}
      <Signup />
    </div>
  )
}

export default App

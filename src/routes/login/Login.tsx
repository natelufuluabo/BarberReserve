import './Login.css'
import TopBar from '../../topbar/TopBar'

function Login() {
  function handleSubmit() {}
  return (
    <>
      <TopBar />
      <div className="login-page">
        <div className="form">
          <h1>Connexion</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="courriel"/>
            <input type="password" placeholder="mot de passe"/>
            <button type='submit'>Se connecter</button>
            <p className="message">Pas de compte? <a href="/signup">Créer un compte</a></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

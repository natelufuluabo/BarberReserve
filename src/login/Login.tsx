import './Login.css'

function Login() {

  return (
    <div className="login-page">
        <div className="form">
            <form className="login-form">
                <input type="text" placeholder="courriel"/>
                <input type="password" placeholder="mot de passe"/>
                <button>Se connecter</button>
                <p className="message">Pas de compte? <a href="#">Créer un compte</a></p>
            </form>
        </div>
</div>
  )
}

export default Login

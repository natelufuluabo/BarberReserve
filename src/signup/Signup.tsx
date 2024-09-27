import './Signup.css'

function Signup() {

  return (
    <div className="login-page">
      <div className="form">
        <h1>Créer un compte</h1>
        <form className="login-form">
            <input type="text" placeholder="nom complet"/>
            <input type="email" placeholder="courriel"/>
            <input type="number" placeholder="téléphone"/>
            <input type="password" placeholder="mot de passe"/>
            <button>Créer mon compte</button>
            <p className="message">Vous avez déjà un compte? <a href="#">Connectez-vous</a></p>
        </form>
      </div>
</div>
  )
}

export default Signup

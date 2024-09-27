import './Signup.css'
import TopBar from '../../topbar/TopBar'

function Signup() {

  return (
    <>
      <TopBar />
      <div className="signup-page">
        <div className="form">
          <h1>Créer un compte</h1>
          <form className="signup-form">
            <input type="text" placeholder="nom complet"/>
            <input type="email" placeholder="courriel"/>
            <input type="number" placeholder="téléphone"/>
            <input type="password" placeholder="mot de passe"/>
            <button>Créer mon compte</button>
            <p className="message">Vous avez déjà un compte? <a href="/login">Connectez-vous</a></p>
          </form>
        </div>
    </div>
    </>
  )
}

export default Signup

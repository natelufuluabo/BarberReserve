import './Signup.css'
import { useState } from 'react'
import TopBar from '../../topbar/TopBar'

function Signup() {
  type Barber = {
    nomComplet: string;
    courriel: string;
    telephone: number;
    motDePasse: string;
  }
  const [formData, setFormData] = useState<Barber>({
    nomComplet: '', courriel: '', telephone: 5555555555, motDePasse: ''
  });

  function handleFormChange(event:any) {
    setFormData({ ...formData, [event.target.name] : event.target.value })
  }

  function handleSubmit(event:any) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      nomComplet: '', courriel: '', telephone: 5555555555, motDePasse: ''
    })
  }

  return (
    <>
      <TopBar />
      <div className="signup-page">
        <div className="form">
          <h1>Créer un compte</h1>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input name='nomComplet' type="text" placeholder="nom complet" onChange={event => handleFormChange(event)}/>
            <input name='courriel' type="email" placeholder="courriel" onChange={event => handleFormChange(event)}/>
            <input name='telephone' type="number" placeholder="téléphone" onChange={event => handleFormChange(event)}/>
            <input name='motDePasse' type="password" placeholder="mot de passe" onChange={event => handleFormChange(event)}/>
            <button type='submit'>Créer mon compte</button>
            <p className="message">Vous avez déjà un compte? <a href="/login">Connectez-vous</a></p>
          </form>
        </div>
    </div>
    </>
  )
}

export default Signup

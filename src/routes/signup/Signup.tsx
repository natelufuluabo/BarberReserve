import './Signup.css'
import { useState } from 'react'
import TopBar from '../../topbar/TopBar'

function Signup() {
  type Barber = {
    nomComplet: string;
    courriel: string;
    telephone: string;
    motDePasse: string;
  }
  const [formData, setFormData] = useState<Barber>({
    nomComplet: '', courriel: '', telephone: '', motDePasse: ''
  });

  const [errorPresent, setErrorPresence] = useState<string>('');

  function handleFormChange(event:any) {
    setFormData({ ...formData, [event.target.name] : event.target.value })
  }

  function validateEmail(courriel:string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(courriel).toLowerCase());
  }

  function handleFormValidation() {
    const {nomComplet, courriel, telephone, motDePasse} = formData;
    if (nomComplet.length < 1) {
      setErrorPresence('Nom invalide');
      return 404;
    }
    if (!validateEmail(courriel)) {
      setErrorPresence('Courriel invalide');
      return 404;
    } 
    if (telephone.length !== 10) {
      setErrorPresence('Téléphone invalide');
      return 404;
    }
    if (motDePasse.length < 8) {
      setErrorPresence('8 charactères minimum pour le mot de passe');
      return 404;
    }
    return 200;
  }

  function handleSubmit(event:any) {
    event.preventDefault();
    if (handleFormValidation() == 404) return;
    console.log(formData);
    setErrorPresence('');
    setFormData({
      nomComplet: '', courriel: '', telephone: '', motDePasse: ''
    })
  }

  return (
    <>
      <TopBar />
      <div className="signup-page">
        <div className="form">
          <h1>Créer un compte</h1>
          {errorPresent && <p className='error'>{errorPresent}</p>}
          <form className="signup-form" onSubmit={handleSubmit}>
            <input name='nomComplet' type="text" placeholder="nom complet*" onChange={event => handleFormChange(event)}/>
            <input name='courriel' type="email" placeholder="courriel*" onChange={event => handleFormChange(event)}/>
            <input name='telephone' type="number" placeholder="téléphone*" 
              onChange={event => {
                  if (Number.isNaN(event.target.value)) event.preventDefault();
                  handleFormChange(event);
                }
              }
            />
            <input name='motDePasse' type="password" placeholder="mot de passe*" onChange={event => handleFormChange(event)}/>
            <button type='submit'>Créer mon compte</button>
            <p className="message">Vous avez déjà un compte? <a href="/login">Connectez-vous</a></p>
          </form>
        </div>
    </div>
    </>
  )
}

export default Signup

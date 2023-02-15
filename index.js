import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import logo from './logo.png';
import background from './background.jpg';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  const pages = {
    home: {
      title: 'Benvenuti al nostro centro di canottaggio',
      content: (
        <p>
          Il nostro centro offre corsi di canottaggio per principianti e per chi vuole migliorare le proprie abilità. Organizziamo anche eventi e gare, e offriamo noleggio di barche e accessori.
        </p>
      ),
    },
    services: {
      title: 'Servizi',
      content: (
        <ul>
          <li>Corsi di canottaggio</li>
          <li>Noleggio di barche e accessori</li>
          <li>Organizzazione di eventi e gare</li>
          <li>Parcheggio gratuito</li>
        </ul>
      ),
    },
    events: {
      title: 'Eventi in programma',
      content: (
        <ul>
          <li>25 giugno: Regata del Solstizio</li>
          <li>10 settembre: Gara di velocità</li>
        </ul>
      ),
    },
    contacts: {
      title: 'Contatti',
      content: (
        <ul>
          <li>Indirizzo: Via del Canottaggio, 123</li>
          <li>Telefono: 555-1234</li>
          <li>Email: info@centrocanottaggio.com</li>
        </ul>
      ),
    },
  };

  return (
    <div className="app">
      <header style={{ backgroundImage: `url(${background})` }}>
        <div className="logo-container">
          <img src={logo} alt="Logo centro di canottaggio" />
        </div>
        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            <li onClick={() => navigate('home')} className={currentPage === 'home' ? 'active' : ''}>Home</li>
            <li onClick={() => navigate('services')} className={currentPage === 'services' ? 'active' : ''}>Servizi</li>
            <li onClick={() => navigate('events')} className={currentPage === 'events' ? 'active' : ''}>Eventi</li>
            <li onClick={() => navigate('contacts')} className={currentPage === 'contacts' ? 'active' : ''}>Contatti</li>
          </ul>
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </header>
      <main>
        <h2>{pages[currentPage].title}</h2>
        {pages[currentPage].content}
      </main>
      <footer>
        <p>&copy; 2023 Centro di Canottaggio</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />)
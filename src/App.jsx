import React from 'react';
import './App.scss';

import NewPortfolio from './components/NewPortfolio/NewPortfolio.jsx';
import Presentacion from './components/NewPortfolio/Presentacion/Presentacion.jsx';
import ContactPage from './pages/Contacto/Contacto.jsx';
import FooterContacto from './components/NewPortfolio/Contacto/Contacto.jsx';

function App() {
  const route = window.location.hash.replace('#', '');
  const isContactPage = route === '/contacto' || route === 'contacto';

  return (
    <div className="app">
      {isContactPage ? (
        <>
          <ContactPage />
          <FooterContacto />
        </>
      ) : (
        <>
          <NewPortfolio />
          <Presentacion />
          <FooterContacto />
        </>
      )}
    </div>
  );
}

export default App;
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NewPortfolio from './components/NewPortfolio/NewPortfolio.jsx';
import Presentacion from './components/NewPortfolio/Presentacion/Presentacion.jsx';
import ContactPage from './pages/Contacto/Contacto.jsx';
import Galeria from './pages/Galeria/Galeria.jsx';
import Album from './pages/Galeria/Album.jsx';
import FooterContacto from './components/NewPortfolio/FooterContacto/FooterContacto.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <NewPortfolio />
              <Presentacion />
              <FooterContacto />
            </>
          } />
          <Route path="/galeria" element={
            <>
              <Galeria />
              <FooterContacto />
            </>
          } />
          <Route path="/galeria/:tipo" element={
            <>
              <Album />
              <FooterContacto />
            </>
          } />
          <Route path="/contacto" element={
            <>
              <ContactPage />
              <FooterContacto />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
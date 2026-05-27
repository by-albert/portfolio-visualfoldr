import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import NewPortfolio from './components/NewPortfolio/NewPortfolio.jsx';
import Presentacion from './components/NewPortfolio/Presentacion/Presentacion.jsx';
import ContactPage from './pages/Contacto/Contacto.jsx';
import Galeria from './pages/Galeria/Galeria.jsx';
import Album from './pages/Galeria/Album/Album.jsx';
import Sesion from './pages/Galeria/Sesion/Sesion.jsx';
import Trabajos from './pages/Trabajos/Trabajos.jsx';
import Experience from './pages/Experience/Experience.jsx';
import Formacion from './pages/Formacion/Formacion.jsx';
import FooterContacto from './components/NewPortfolio/FooterContacto/FooterContacto.jsx';

function App() {
  return (
    <Router>

      <div className="app">

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <NewPortfolio />
                <Presentacion />
                <Experience />
                <Formacion />
                <FooterContacto />
              </>
            }
          />

          {/* GALERÍA */}
          <Route
            path="/galeria"
            element={
              <>
                <Galeria />
                <FooterContacto />
              </>
            }
          />

          {/* ÁLBUM */}
          <Route
            path="/galeria/:tipo"
            element={
              <>
                <Album />
                <FooterContacto />
              </>
            }
          />
          <Route
            path="/galeria/:tipo/:sesion"
            element={
            <>
            <Sesion />
          <FooterContacto />
          </>
            }
          />  


          {/* TRABAJOS */}
          <Route
            path="/trabajos"
            element={
              <>
                <Trabajos />
                <FooterContacto />
              </>
            }
          />

          {/* EXPERIENCIA */}
          <Route
            path="/experiencia"
            element={
              <>
                <Experience />
                <Formacion />
                <FooterContacto />
              </>
            }
          />

          {/* CONTACTO */}
          <Route
            path="/contacto"
            element={
              <>
                <ContactPage />
                <FooterContacto />
              </>
            }
          />

        </Routes>

      </div>

    </Router>
  );
}

export default App;
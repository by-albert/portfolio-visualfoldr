import React, { useEffect } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Menu from './pages/Menu/Menu.jsx';
import Presentacion from './pages/Presentacion/Presentacion.jsx';
import ContactPage from './pages/Contacto/Contacto.jsx';
import Galeria from './pages/Galeria/Galeria.jsx';
// import Album from './pages/Galeria/Album/Album.jsx';
import Sesion from './pages/Galeria/Sesion/Sesion.jsx';
import Experience from './pages/Experience/Experience.jsx';
import Formacion from './pages/Formacion/Formacion.jsx';
import FooterContacto from './pages/Menu/FooterContacto/FooterContacto.jsx';

/* ========================= */
/* SCROLL TO TOP CLEAN */
/* ========================= */
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {

    if (location.state?.scrollTo === 'galeria') {

      setTimeout(() => {

        document
          .getElementById('galeria')
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

      }, 100);

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }, [location]);

  return null;
}

/* ========================= */
/* ROUTES */
/* ========================= */
function AppRoutes() {
  return (
    <>
      <ScrollToTop />

      <div className="app">

        <Routes>

          {/* ========================= */}
          {/* HOME (LANDING) */}
          {/* ========================= */}
          <Route
            path="/"
            element={
              <>
                <Menu />
                <Presentacion />
                <Galeria />
                <Experience />
                <Formacion />
                <FooterContacto />
              </>
            }
          />

          {/* ========================= */}
          {/* GALERÍA (PÁGINA REAL) */}
          {/* ========================= */}
          <Route
            path="/galeria"
            element={
              <>
                {/* <Menu /> */}
                <Galeria />
                <FooterContacto />
              </>
            }
          />

          {/* ========================= */}
          {/* ÁLBUM */}
          {/* ========================= */}
          {/* <Route
            path="/galeria/:tipo"
            element={
              <>
                <Album />
                <FooterContacto />
              </>
            }
          /> */}

          {/* ========================= */}
          {/* SESIÓN */}
          {/* ========================= */}
          <Route
          path="/galeria/:tipo"
          element={
          <>
          <Sesion />
          <FooterContacto />
          </>
        }
        />
        
          {/* ========================= */}
          {/* CONTACTO */}
          {/* ========================= */}
          <Route
            path="/contacto"
            element={
              <>
                {/* <Menu /> */}
                <ContactPage />
                {/* <FooterContacto /> */}
              </>
            }
          />

        </Routes>

      </div>
    </>
  );
}

/* ========================= */
/* WRAPPER */
/* ========================= */
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
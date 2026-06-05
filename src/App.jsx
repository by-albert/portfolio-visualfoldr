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
import Album from './pages/Galeria/Album/Album.jsx';
import Sesion from './pages/Galeria/Sesion/Sesion.jsx';
import Experience from './pages/Experience/Experience.jsx';
import Formacion from './pages/Formacion/Formacion.jsx';
import FooterContacto from './pages/Menu/FooterContacto/FooterContacto.jsx';

/* ========================= */
/* SCROLL TO TOP GLOBAL */
/* ========================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {

    const shouldScrollToGallery =
      sessionStorage.getItem('scrollToGaleria');

    if (
      pathname === '/' &&
      shouldScrollToGallery
    ) {

      sessionStorage.removeItem(
        'scrollToGaleria'
      );

      setTimeout(() => {

        document
          .getElementById('galeria')
          ?.scrollIntoView({
            behavior: 'smooth'
          });

      }, 300);

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }, [pathname]);

  return null;
}

/* ========================= */
/* APP */
/* ========================= */

function AppRoutes() {
  return (
    <>
      <ScrollToTop />

      <div className="app">

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Menu />
                <Presentacion />
                <Galeria/>
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

          {/* SESIÓN */}
          <Route
            path="/galeria/:tipo/:sesion"
            element={
              <>
                <Sesion />
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
    </>
  );
}

/* ========================= */
/* WRAPPER ROUTER */
/* ========================= */

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
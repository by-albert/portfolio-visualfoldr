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
/* SCROLL TO TOP CLEAN */
/* ========================= */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

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
          <Route
            path="/galeria/:tipo"
            element={
              <>
                {/* <Menu /> */}
                <Album />
                <FooterContacto />
              </>
            }
          />

          {/* ========================= */}
          {/* SESIÓN */}
          {/* ========================= */}
          <Route
            path="/galeria/:tipo/:sesion"
            element={
              <>
                {/* <Menu /> */}
                <Sesion />
                <FooterContacto />
              </>
            }
          />

          {/* ========================= */}
          {/* CONTACTO (si lo quieres mantener como ruta) */}
          {/* ========================= */}
          <Route
            path="/contacto"
            element={
              <>
                {/* <Menu /> */}
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
import { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  useLocation,
  useNavigate
} from 'react-router-dom';
import './Sesion.scss';

import { albumsData } from '../data/data.js';

const Sesion = () => {

  const { tipo, sesion } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState(false);

  const goToGallery = () => {
    navigate('/', {
      state: {
        scrollTo: 'galeria'
      }
    });
  };

  /* ========================= */
  /* SCROLL TOP */
  /* ========================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  /* ========================= */
  /* NAV APPEAR */
  /* ========================= */

  useEffect(() => {

    const handleScroll = () => {
      setShowNav(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);

  }, []);

  /* ========================= */
  /* DATA */
  /* ========================= */

  const album = albumsData[tipo];

  if (!album) {

    return (
      <section className="sesion-page">

        <div className="sesion-container">

          <h1>Álbum no encontrado</h1>

          <button
            className="back-link"
            onClick={goToGallery}
          >
            ← Volver a la galería
          </button>

        </div>

      </section>
    );

  }

  const data = album.sesiones.find(
    item => item.id === sesion
  );

  if (!data) {

    return (
      <section className="sesion-page">

        <div className="sesion-container">

          <h1>Sesión no encontrada</h1>

          <Link
            to={`/galeria/${tipo}`}
            className="back-link"
          >
            ← Volver al álbum
          </Link>

        </div>

      </section>
    );

  }

  return (

    <section className="sesion-page">

      <div className="sesion-container">

        {/* NAV */}

        <div
          className={`session-nav ${
            showNav ? 'visible' : ''
          } ${
            navCollapsed ? 'collapsed' : ''
          }`}
        >

          <button
            className="toggle-nav"
            onClick={() => setNavCollapsed(true)}
          >
            ✕
          </button>

          <Link
            to={`/galeria/${tipo}`}
            className="back-link"
          >
            Más de "{album.nombre}"
          </Link>

          <div className="nav-divider"></div>

          <button
            className="back-link"
            onClick={goToGallery}
          >
            Otros álbumes
          </button>

        </div>

        {showNav && navCollapsed && (

          <button
            className="nav-reopen"
            onClick={() => setNavCollapsed(false)}
          >
            ☰
          </button>

        )}

        {/* HEADER */}

        <div className="sesion-header">

          <h1 className="sesion-title">
            {data.titulo}
          </h1>

          <p className="sesion-date">
            {data.fecha}
          </p>

        </div>

        {/* IMÁGENES */}

        <div className="sesion-grid">

          {data.imagenes.map((img, index) => (

            <div
              key={index}
              className="sesion-card"
            >
              <img
                src={img}
                alt={`${data.titulo}-${index + 1}`}
                loading="lazy"
              />
            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Sesion;
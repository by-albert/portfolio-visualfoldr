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

  const goToGallery = () => {
    navigate('/', {
      state: {
        scrollTo: 'galeria'
      }
    });
  };

  const [showNav, setShowNav] = useState(false); // Para mostrar el nav al hacer scroll 
  const [navCollapsed, setNavCollapsed] = useState(false); // Para ocultar el nav en móviles

  
  /* ========================= */
  /* SCROLL ARRIBA AL ENTRAR */
  /* ========================= */

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }, [location.pathname]);

  /* ========================= */
  /* NAV SCROLL */
  /* ========================= */

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 250) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  /* ========================= */
  /* BUSCAR ÁLBUM */
  /* ========================= */

  const album = albumsData[tipo];

  /* ========================= */
  /* SI NO EXISTE EL ÁLBUM */
  /* ========================= */

  if (!album) {

    return (

      <section className="sesion-page">

        <div className="sesion-container">

          <h1>Álbum no encontrado</h1>

          <button className="back-link" onClick={goToGallery}>
            ← Volver a la galería
          </button>

        </div>

      </section>

    );

  }

  /* ========================= */
  /* BUSCAR SESIÓN */
  /* ========================= */

  const data = album.sesiones.find(
    (item) => item.id === sesion
  );

  /* ========================= */
  /* SI NO EXISTE LA SESIÓN */
  /* ========================= */

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

  /* ========================= */
  /* RENDER */
  /* ========================= */

  return (

    <section className="sesion-page">

      <div className="sesion-container">

        {/* NAV */}
        <div className={` session-nav ${showNav ? 'visible' : ''} ${navCollapsed ? 'collapsed' : ''}
        `}
        >

  <button
    className="toggle-nav"
    onClick={() => setNavCollapsed(true)}
  >
    ✕
  </button>

  <Link
    to={`/galeria/${tipo}`}
    className="back-link active"
  >
    Más de '{album.nombre}'
  </Link>

  <div className="nav-divider"></div>

  <button className="back-link" onClick={goToGallery}>
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

        {/* GRID */}

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
import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import './Sesion.scss';

import { albumsData } from '../data/data.js';

const Sesion = () => {

  const { tipo, sesion } = useParams();

  const location = useLocation();

  const [showNav, setShowNav] = useState(false);

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

          <Link
            to="/galeria"
            className="back-link"
          >
            ← Volver a la galería
          </Link>

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

        <div className={`session-nav ${showNav ? 'visible' : ''}`}>

          
          
          <Link
            to={`/galeria/${tipo}`}
            className="back-link active"
          >
            Más álbumes de {album.nombre}
          </Link>


          {/* SEPARADOR */}

          <div className="nav-divider"></div>

          <Link
            to="/galeria"
            className="back-link" // MIRAR LOS ESPACIOS QUE LO HE TOCADO ESTO Y SE VE MAL
          >
            ← Volver
          </Link>

          
        </div>

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
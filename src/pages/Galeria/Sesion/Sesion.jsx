import { useEffect, useState } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import './Sesion.scss';
import { albumsData } from '../data/data.js';

const Sesion = () => {
  const { tipo, sesion } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const album = albumsData[tipo];

  const goToGallery = () => {
    navigate('/galeria');
  };

  const goToAlbum = () => {
    navigate(`/galeria/${tipo}`);
  };

  if (!album) {
    return (
      <section className="sesion-page">
        <h1>Álbum no encontrado</h1>

        <button onClick={goToGallery}>
          ← Volver a la galería
        </button>
      </section>
    );
  }

  const data = album.sesiones.find((item) => item.id === sesion);

  if (!data) {
    return (
      <section className="sesion-page">
        <h1>Sesión no encontrada</h1>

        <Link to={`/galeria/${tipo}`}>
          ← Volver al álbum
        </Link>
      </section>
    );
  }

  return (
    <section className="sesion-page">
      <div className="sesion-container">

        {/* NAV */}
        <div
          className={`session-nav ${showNav ? 'visible' : ''} ${navCollapsed ? 'collapsed' : ''}`}
        >
          <button
            className="toggle-nav"
            onClick={() => setNavCollapsed(true)}
          >
            ✕
          </button>

          <button className="back-link active" onClick={goToAlbum}>
            Más de {album.nombre}
          </button>

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
          <h1 className="sesion-title">{data.titulo}</h1>
          <p className="sesion-date">{data.fecha}</p>
        </div>

        {/* GRID */}
        <div className="sesion-grid">
          {data.imagenes.map((img, index) => (
            <div key={index} className="sesion-card">
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
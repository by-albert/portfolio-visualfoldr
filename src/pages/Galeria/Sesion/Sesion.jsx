import { useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  useNavigate
} from 'react-router-dom';

import './Sesion.scss';
import { albumsData } from '../data/data.js';

const Sesion = () => {
  const { tipo } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState(false);

  // ✅ SOLO UNA VEZ (esto era tu bug principal)
  const [selectedImage, setSelectedImage] = useState(null);

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
    return () => window.removeEventListener('scroll', handleScroll);
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

          <button className="back-link" onClick={goToGallery}>
            ← Volver a la galería
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="sesion-page">
      <div className="sesion-container">

        {/* NAV */}
        <div className={`session-nav ${showNav ? 'visible' : ''} ${navCollapsed ? 'collapsed' : ''}`}>
          <button
            className="toggle-nav"
            onClick={() => setNavCollapsed(true)}
          >
            ✕
          </button>

          <h3 className="back-link">{album.nombre}</h3>

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
          <h1 className="sesion-title">{album.nombre}</h1>
        </div>

        {/* IMÁGENES */}
        {album.sesiones.map((sesion) => (
          <div key={sesion.id} className="album-section">

            <div className="album-section-header">
              <h2>{sesion.titulo}</h2>
              <p>{sesion.fecha}</p>
            </div>

            <div className="sesion-grid">

              {sesion.imagenes.map((img, index) => (
                <div key={index} className="sesion-card">

                  <img
                    src={img}
                    alt={`${sesion.titulo}-${index + 1}`}
                    loading="lazy"
                    onClick={() => setSelectedImage(img)}
                  />

                </div>
              ))}

            </div>
          </div>
        ))}

      </div>

      {/* ========================= */}
      {/* MODAL IMAGEN */}
      {/* ========================= */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="close-modal"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}
    </section>
  );
};

export default Sesion;
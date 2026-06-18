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
  const [selectedImage, setSelectedImage] = useState(null);

  /* ========================= */
  /* MOBILE DETECTION */
  /* ========================= */
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

  /* ========================= */
  /* ALL IMAGES */
  /* ========================= */
  const allImages = album.sesiones.flatMap((sesion) =>
    isMobile && sesion.imagenesMobile
      ? sesion.imagenesMobile
      : sesion.imagenes
  );

  /* ========================= */
  /* NEXT / PREV */
  /* ========================= */
  const nextImage = () => {
    const currentIndex =
      allImages.indexOf(selectedImage);

    if (currentIndex < allImages.length - 1) {
      setSelectedImage(
        allImages[currentIndex + 1]
      );
    }
  };

  const prevImage = () => {
    const currentIndex =
      allImages.indexOf(selectedImage);

    if (currentIndex > 0) {
      setSelectedImage(
        allImages[currentIndex - 1]
      );
    }
  };

  /* ========================= */
  /* MODAL KEYS */
  /* ========================= */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      }

      if (e.key === 'ArrowRight') {
        nextImage();
      }

      if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [selectedImage]);

  /* ========================= */
  /* LOCK BODY SCROLL */
  /* ========================= */
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow =
        'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <section className="sesion-page">
      <div className="sesion-container">

        {/* NAV */}
        <div
          className={`session-nav ${
            showNav ? 'visible' : ''
          } ${
            navCollapsed
              ? 'collapsed'
              : ''
          }`}
        >
          <button
            className="toggle-nav"
            onClick={() =>
              setNavCollapsed(true)
            }
          >
            ✕
          </button>

          <h3 className="back-link">
            {album.nombre}
          </h3>

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
            onClick={() =>
              setNavCollapsed(false)
            }
          >
            ☰
          </button>
        )}

        {/* HEADER */}
        <div className="sesion-header">
          <h1 className="sesion-title">
            {album.nombre}
          </h1>
        </div>

        {/* SESIONES */}
        {album.sesiones.map((sesion) => (
          <div
            key={sesion.id}
            className="album-section"
          >
            <div className="album-section-header">
              <h2>{sesion.titulo}</h2>
              <p>{sesion.fecha}</p>
            </div>

            <div className="sesion-grid">

              {(isMobile &&
              sesion.imagenesMobile
                ? sesion.imagenesMobile
                : sesion.imagenes
              ).map((img, index) => (
                <div
                  key={index}
                  className="sesion-card"
                >
                  <img
                    src={img}
                    alt={`${sesion.titulo}-${index + 1}`}
                    loading="lazy"
                    onClick={() =>
                      setSelectedImage(img)
                    }
                  />
                </div>
              ))}

            </div>
          </div>
        ))}

      </div>

      {/* ========================= */}
      {/* MODAL */}
      {/* ========================= */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={() =>
            setSelectedImage(null)
          }
        >
          <button
            className="close-modal"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            ✕
          </button>

          <button
            className="modal-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ←
          </button>

          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="modal-image"
            onClick={(e) =>
              e.stopPropagation()
            }
          />

          <button
            className="modal-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            →
          </button>
        </div>
      )}
    </section>
  );
};

export default Sesion;
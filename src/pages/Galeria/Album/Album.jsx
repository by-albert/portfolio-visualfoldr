import { useParams, Link, useNavigate } from 'react-router-dom';
import './Album.scss';
import { albumsData } from '../data/data.js';

const Album = () => {
  const { tipo } = useParams();
  const navigate = useNavigate();

  const album = albumsData[tipo];

  const goToGallery = () => {
    navigate('/galeria');
  };

  if (!album) {
    return (
      <section className="album-page">
        <h1>Álbum no encontrado</h1>

        <button className="back-link" onClick={goToGallery}>
          ← Volver a la galería
        </button>
      </section>
    );
  }

  return (
    <section className="album-page">
      <div className="album-container">

        {/* NAV SUPERIOR */}
        <div className="album-nav">
          <button className="back-link" onClick={goToGallery}>
            ← Galería
          </button>
        </div>

        <h1>{album.nombre}</h1>

        <div className="albums-grid">
          {album.sesiones.map((sesion) => (
            <Link
              key={sesion.id}
              to={`/galeria/${tipo}/${sesion.id}`}
              className="album-card"
            >
              <div
                className="album-image"
                style={{
                  backgroundImage: `url(${sesion.portada})`
                }}
              >
                <div className="album-overlay">
                  <h2>{sesion.titulo}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Album;
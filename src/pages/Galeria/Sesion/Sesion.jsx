import { useParams, Link } from 'react-router-dom';
import './Sesion.scss';

import { albumsData } from '../data/data.js';

const Sesion = () => {
  const { tipo, sesion } = useParams();

  // BUSCAR ÁLBUM
  const album = albumsData[tipo];

  // SI NO EXISTE EL ÁLBUM
  if (!album) {
    return (
      <section className="sesion-page">
        <div className="sesion-container">

          <h1>Álbum no encontrado</h1>

          <Link to="/galeria" className="back-link">
            ← Volver a la galería
          </Link>

        </div>
      </section>
    );
  }

  // BUSCAR SESIÓN DENTRO DEL ÁLBUM
  const data = album.sesiones.find(
    (item) => item.id === sesion
  );

  // SI NO EXISTE LA SESIÓN
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

        {/* NAVEGACIÓN */}
        <div className="sesion-nav">

          <Link
            to="/galeria"
            className="back-link"
          >
            ← Galería

            {/* SEPARADOR */}
            <span className="nav-separator">/</span>

          </Link>

          <Link
            to={`/galeria/${tipo}`}
            className="back-link"
          >
            {album.nombre}
          </Link>

        </div>

        {/* TÍTULO */}
        <h1>{data.titulo}</h1>

        <p className="sesion-date">
          {data.fecha}
        </p>

        {/* GRID DE IMÁGENES */}
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
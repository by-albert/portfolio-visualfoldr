import { useParams, Link } from 'react-router-dom';
import './Sesion.scss';

// IMPORTS TEMPORALES (luego vendrá de data.js)
import foto1 from '../../../assets/albums/Vincit-01.jpg';
import foto2 from '../../../assets/backgrounds/foto-2.jpg';
import foto3 from '../../../assets/albums/sk8-01.jpg';

import { albumsData } from '../data/data.js';

const sesionesData = {
  'sant-joan-vs-martinenc': {
    titulo: 'Sant Joan vs Martinenc',
    fecha: '07/04/2026',
    imagenes: [foto1, foto2, foto3]
  }
};

const Sesion = () => {
  const { sesion } = useParams();
  const data = sesionesData[sesion];

  if (!data) {
    return (
      <section className="sesion-page">
        <div className="sesion-container">
          <h1>Sesión no encontrada</h1>
          <Link to="/galeria" className="back-link">← Volver</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="sesion-page">
      <div className="sesion-container">

        <div className="sesion-nav">
          <Link to="/galeria" className="back-link">← Galería</Link>
          <Link to=".." className="back-link">Álbum</Link>
        </div>

        <h1>{data.titulo}</h1>
        <p className="sesion-date">{data.fecha}</p>

        <div className="sesion-grid">
          {data.imagenes.map((img, i) => (
            <div key={i} className="sesion-card">
              <img src={img} alt={`foto-${i}`} loading="lazy" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sesion;
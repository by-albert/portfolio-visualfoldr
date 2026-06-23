import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Galeria.scss';

import StAndreu_05 from '../../assets/futbol-sala/St-Andreu/StAndreu-05.jpg';
import foto1 from '../../assets/backgrounds/desktop/foto-1.jpg';
import skate05 from '../../assets/skate/sk8-01.jpg';
import gaviota from '../../assets/experimental/gaviota.jpg';
import nologos_01 from '../../assets/moda/nologos-01.jpg';

const albums = [
  {
    id: 'conciertos',
    nombre: 'Conciertos',
    descripcion: 'Conciertos en vivo.',
    imagen: foto1
  },
  {
    id: 'skate',
    nombre: 'Skateboarding',
    descripcion: 'Deportes extremos!',
    imagen: skate05
  },
  {
    id: 'experimental',
    nombre: 'Experimental',
    descripcion: 'Exploración creativa en desarrollo constante.',
    imagen: gaviota
  },
  {
    id: 'futbol-sala',
    nombre: 'Fútbol Sala',
    descripcion: 'Liga de tercera división juvenil.',
    imagen: StAndreu_05
  },
  {
    id: 'moda',
    nombre: 'Moda',
    descripcion: 'Colaboraciones con marcas.',
    imagen: nologos_01
  }
];

const Galeria = () => {
  const [activeAlbum, setActiveAlbum] = useState(null);

  return (
    <section id="galeria" className="galeria-page">
      <div className="galeria-container">

        <h1>Galería</h1>
        <p className="galeria-subtitle">
          Explora mis álbumes de fotografía
        </p>

        <div
          className={`albums-grid ${activeAlbum ? 'grid-active' : ''}`}
        >
          {albums.map((album) => (
            <Link
              key={album.id}
              to={`/galeria/${album.id}`}
              className={`album-card ${
                activeAlbum === album.id ? 'active' : ''
              }`}
              onMouseEnter={() => setActiveAlbum(album.id)}
              onMouseLeave={() => setActiveAlbum(null)}
            >
              <div
                className="album-image"
                style={{
                  backgroundImage: `url(${album.imagen})`
                }}
              >
                <div className="album-overlay">
                  <h2>{album.nombre}</h2>
                  <p>{album.descripcion}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Galeria;
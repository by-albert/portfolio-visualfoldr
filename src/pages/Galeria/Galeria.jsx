import { Link } from 'react-router-dom';
import './Galeria.scss';

import vincit01 from '../../assets/futbol-sala/Vincit/Vincit-01.jpg';
import foto2 from '../../assets/backgrounds/foto-2.jpg';
import foto3 from '../../assets/skate/sk8-01.jpg';
import flor from '../../assets/experimental/flor.jpg';

const albums = [
  {
    id: 'futbol-sala',
    nombre: 'Fútbol Sala',
    descripcion: 'Tercera división juvenil.',
    imagen: vincit01
  },
  {
    id: 'conciertos',
    nombre: 'Conciertos',
    descripcion: 'Energía y pasión.',
    imagen: foto2
  },
    {
    id: 'skate',
    nombre: 'Skate',
    descripcion: 'Momentos de libertad y creatividad',
    imagen: foto3
  },
  {
    id: 'experimental',
    nombre: 'Experimental',
    descripcion: 'Exploración creativa en desarrollo constante',
    imagen: flor
  }
];

const Galeria = () => (
  <section id="galeria" className="galeria-page">
    <div className="galeria-container">
      <Link to="/" className="back-link">← Inicio</Link>
      
      <h1>Galería</h1>
      <p className="galeria-subtitle">Explora mis álbumes de fotografía</p>
      
      <div className="albums-grid">
        {albums.map((album) => (
          <Link
            key={album.id}
            to={`/galeria/${album.id}`}
            className="album-card"
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

export default Galeria;
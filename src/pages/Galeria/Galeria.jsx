import { Link } from 'react-router-dom';
import './Galeria.scss';

import vincit01 from '../../assets/futbol-sala/Vincit/Vincit-01.jpg';
import foto2 from '../../assets/backgrounds/desktop/foto-2.jpg';
import skate05 from '../../assets/skate/sk8-01.jpg';
import gaviota from '../../assets/experimental/gaviota.jpg';

const albums = [
  {
    id: 'futbol-sala',
    nombre: 'Fútbol Sala',
    descripcion: 'Equipo de tercera división juvenil.',
    imagen: vincit01
  },
  {
    id: 'conciertos',
    nombre: 'Conciertos',
    descripcion: 'Conciertos en vivo.',
    imagen: foto2
  },
    {
    id: 'skate',
    nombre: 'Skate',
    descripcion: 'Amigos y skate',
    imagen: skate05
  },
  {
    id: 'experimental',
    nombre: 'Experimental',
    descripcion: 'Exploración creativa en desarrollo constante',
    imagen: gaviota
  }
];

const Galeria = () => (
  <section id="galeria" className="galeria-page">
    <div className="galeria-container">
     
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
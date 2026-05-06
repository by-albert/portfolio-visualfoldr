import { useParams, Link } from 'react-router-dom';
import './Album.scss';
import foto1 from '../../assets/backgrounds/foto-1.jpg';
import foto2 from '../../assets/backgrounds/foto-2.jpg';
import foto3 from '../../assets/backgrounds/foto-3.jpg';
import foto4 from '../../assets/backgrounds/foto-4.jpg';

// Datos simulados de imágenes por álbum
const albumsData = {
  'futbol-sala': {
    nombre: 'Fútbol Sala',
    imagenes: [
      { id: 1, url: foto1, titulo: 'Maristas Sant Joan' },
      { id: 2, url: foto2, titulo: 'Jugador en movimiento' },
      { id: 3, url: foto3, titulo: 'Momento de concentración' },
      { id: 4, url: foto4, titulo: 'Celebración de gol' },
      { id: 5, url: foto1, titulo: 'Pase al gol' },
      { id: 6, url: foto2, titulo: 'Defensa en acción' },
    ]
  },
  'conciertos': {
    nombre: 'Conciertos',
    imagenes: [
      { id: 1, url: foto2, titulo: 'WE DANCE BAND - 2026' },
    //   { id: 2, url: foto3, titulo: 'Artista en directo' },
    //   { id: 3, url: foto4, titulo: 'Audiencia vibrante' },
    //   { id: 4, url: foto1, titulo: 'Momento musical' },
    //   { id: 5, url: foto2, titulo: 'Luces y música' },
    //   { id: 6, url: foto3, titulo: 'Conexión con el público' },
    ]
  },
  'experimental': {
    nombre: 'Experimental / Amigos',
    imagenes: [
      { id: 1, url: foto3, titulo: 'Exploración creativa' },
      { id: 2, url: foto4, titulo: 'Momentos compartidos' },
      { id: 3, url: foto1, titulo: 'Diversidad visual' },
      { id: 4, url: foto2, titulo: 'Arte experimental' },
      { id: 5, url: foto3, titulo: 'Amistad capturada' },
      { id: 6, url: foto4, titulo: 'Creación conjunta' },
    ]
  }
};

const Album = () => {
  const { tipo } = useParams();
  const album = albumsData[tipo];

  if (!album) {
    return (
      <section className="album-page">
        <div className="album-container">
          <h1>Álbum no encontrado</h1>
          <Link to="/galeria" className="back-link">
            Volver a la galería
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="album-page">
      <div className="album-container">
        <div className="album-nav">
          <Link to="/galeria" className="back-link">← Volver a la galería</Link>
          <Link to="/" className="back-link">Inicio</Link>
        </div>
        
        <h1>{album.nombre}</h1>
        
        <div className="imagenes-grid">
          {album.imagenes.map((imagen) => (
            <div key={imagen.id} className="imagen-card">
              <img
                src={imagen.url}
                alt={imagen.titulo}
                loading="lazy"
              />
              <div className="imagen-overlay">
                <p>{imagen.titulo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Album;

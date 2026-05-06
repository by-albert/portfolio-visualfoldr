import { Link } from 'react-router-dom';
import './Trabajos.scss';

const trabajos = [
  {
    id: 1,
    titulo: 'Portfolio Fotográfico',
    descripcion: 'Diseño y desarrollo de portfolio personal para fotógrafo, con galería interactiva y navegación fluida.',
    tecnologias: ['React', 'SCSS', 'Vite'],
    imagen: null // placeholder
  },
  {
    id: 2,
    titulo: 'Sitio Web Corporativo',
    descripcion: 'Desarrollo de sitio web responsive para empresa local, con integración de CMS y optimización SEO.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    imagen: null
  },
  {
    id: 3,
    titulo: 'Aplicación Móvil',
    descripcion: 'Desarrollo de app móvil híbrida para gestión de proyectos fotográficos y edición de imágenes.',
    tecnologias: ['React Native', 'Firebase', 'Node.js'],
    imagen: null
  },
  {
    id: 4,
    titulo: 'Campaña Publicitaria',
    descripcion: 'Dirección y producción de campaña fotográfica para marca de moda, incluyendo post-producción y edición.',
    tecnologias: ['Photoshop', 'Lightroom', 'Illustrator'],
    imagen: null
  },
  {
    id: 5,
    titulo: 'E-commerce Personalizado',
    descripcion: 'Tienda online para venta de productos fotográficos con pasarela de pagos integrada.',
    tecnologias: ['Shopify', 'Liquid', 'JavaScript'],
    imagen: null
  },
  {
    id: 6,
    titulo: 'Blog de Fotografía',
    descripcion: 'Plataforma de blogging especializada en técnicas fotográficas con comunidad integrada.',
    tecnologias: ['WordPress', 'PHP', 'MySQL'],
    imagen: null
  }
];

const Trabajos = () => (
  <section id="trabajos" className="trabajos-page">
    <div className="trabajos-container">
      <Link to="/" className="back-link">← Inicio</Link>

      <h1>Trabajos</h1>
      <p className="trabajos-subtitle">Proyectos realizados y servicios ofrecidos</p>

      <div className="trabajos-grid">
        {trabajos.map((trabajo) => (
          <div key={trabajo.id} className="trabajo-card">
            <div className="trabajo-image">
              <span className="placeholder-image">Imagen del proyecto</span>
            </div>
            <div className="trabajo-content">
              <h3>{trabajo.titulo}</h3>
              <p>{trabajo.descripcion}</p>
              <div className="trabajo-tags">
                {trabajo.tecnologias.map((tech, index) => (
                  <span key={index} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Trabajos;

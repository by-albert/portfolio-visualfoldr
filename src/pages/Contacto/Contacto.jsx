import { Link } from 'react-router-dom';
import './Contacto.scss';
import qr from '../../assets/img/visualfoldr_qr.png';

const Contacto = () => {
  return (
    <section id="contacto" className="contact-page">
      <div className="contact-card">
        
        {/* CONTENIDO */}
        <div className="contact-content">
          <Link to="/" className="back-link">← Inicio</Link>
          
          <h2>Contacto</h2>
          <p>Disponible para proyectos, colaboraciones y encargos creativos.</p>

          <div className="contact-details">
            <div className="contact-detail">
              <h3>Teléfono</h3>
              <p>(+34) 695 453 119</p>
            </div>

            <div className="contact-detail">
              <h3>Email</h3>
              <a href="mailto:apencas03@gmail.com">
                apencas03@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <h3>LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/albert-pen-cas" 
                target="_blank" 
                rel="noreferrer"
              >
                linkedin.com/in/albert-pen-cas
              </a>
            </div>
          </div>

          {/* <div className="contact-actions">
            <a 
              className="contact-button" 
              href="mailto:apencas03@gmail.com"
            >
              Email
            </a>

            <a 
              className="contact-link" 
              href="https://www.linkedin.com/in/albert-pen-cas" 
              target="_blank" 
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <Link to="/" className="contact-button back-button">
              Inicio
            </Link>
          </div> */}
        </div>

        {/* IMAGEN QR*/}
        <div className="contact-image">
          <img src={qr} alt="QR Code cuenta de Instagram"/>
          <p>ESCANÉAME ;)</p>
        </div>

      </div>
    </section>
  );
};

export default Contacto;
import { Link } from 'react-router-dom';
import './Contacto.scss';
import qr from '../../assets/img/visualfoldr_qr.png';
import { useEffect } from 'react';

// BLOQUE DE CONTACTO GRANDE

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  
  return (
    
    <section id="contacto" className="contact-page">
      <div className="contact-card">
        
        {/* CONTENIDO */}
        <div className="contact-content">
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
          
           <Link to="/" className="contact-button back-button">
              Volver al Inicio
            </Link>
        </div>

        {/* IMAGEN QR*/}
        <div className="contact-image">
          <div className="qr-wrapper">
            <img src={qr} alt="Código QR de mi cuenta de Instagram" />
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contacto;
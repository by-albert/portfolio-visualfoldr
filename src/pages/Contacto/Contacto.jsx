import { Link } from 'react-router-dom';
import './Contacto.scss';
import qr from '../../assets/img/visualfoldr_qr.webp';

import { useEffect } from 'react';

import {
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

const Contacto = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="contacto"
      className="contact-page"
    >

      <div className="contact-card">

        {/* DESKTOP */}
        <div className="contact-content">

          <h2>Contacto</h2>

          <p>
            Disponible para proyectos, colaboraciones.
          </p>

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

        </div>

        {/* DESKTOP QR */}
        <div className="contact-image">

          <div className="qr-wrapper">
            <img
              src={qr}
              alt="Código QR Instagram"
            />
          </div>

        </div>

        {/* MOBILE */}
        <div className="contact-mobile">

          <h2>Contacto</h2>

          <p>
            Disponible para proyectos,
            colaboraciones y más.
            <br />
          </p>

          <div className="mobile-socials">

            <a
              href="https://www.instagram.com/visualfoldr/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/albert-pen-cas"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            {/* MÁS ADELANTE */}
            {/* <a
              href="https://www.behance.net/albertpenads"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="Behance"
            >
              <FaBehance />
            </a> */}

            <a
              href="mailto:apencas03@gmail.com"
              className="social-btn"
              aria-label="Email"
             >
              <FaEnvelope />
            </a>

            <a
              href="tel:+34695453119"
              className="social-btn"
              aria-label="Teléfono"
            >
              <FaPhone />
            </a>

          </div>

        </div>

        {/* BOTÓN VOLVER */}
      <div className="contact-footer">

        <Link
          to="/"
          className="contact-button"
        >
          Volver al inicio
        </Link>

      </div>
      </div>

    </section>
  );
};

export default Contacto;
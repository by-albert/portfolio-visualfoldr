import { Link } from 'react-router-dom';
import './Contacto.scss';
// import qr from '../../assets/img/visualfoldr_qr.webp';

import { useEffect } from 'react';

import {
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

const Contacto = () => {

  const qr = '/img/visualfoldr_qr.webp';

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

            <span className="contact-tag">
              Disponible para trabajar
            </span>

            <h2>
              ¿Empezamos?
            </h2>

            <p className="contact-intro">
              ¿Te imaginas cómo sería dar vida a tu proyecto?
              <br />             
              ¡Pongámonos en contacto y empecemos cuanto antes!
            </p>

            <div className="contact-actions">

              <a
                href="mailto:apencas03@gmail.com"
                className="contact-action"
              >
                <FaEnvelope />
                <div>
                  <span>Email</span>
                  <strong>apencas03@gmail.com</strong>
                </div>
              </a>

              <a
                href="tel:+34695453119"
                className="contact-action"
              >
                <FaPhone />
                <div>
                  <span>Teléfono</span>
                  <strong>+34 695 453 119</strong>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/albert-pen-cas"
                target="_blank"
                rel="noreferrer"
                className="contact-action"
              >
                <FaLinkedin />
                <div>
                  <span>LinkedIn</span>
                  <strong>Albert Penadés Casajús</strong>
                </div>
              </a>

            </div>

          </div>

        {/* DESKTOP QR */}
        <div className="contact-image">
          <div className="qr-card">
            <img
              src={qr}
              alt="Código QR Instagram"
              loading = 'lazy'
            />

            <h3>
              Instagram
            </h3>

            <p>
              Escanea el QR para ver mi trabajo
              fotográfico.
            </p>

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
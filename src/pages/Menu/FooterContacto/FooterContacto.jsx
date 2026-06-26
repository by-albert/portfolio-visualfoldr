import { useState } from "react";
import "./FooterContacto.scss";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaArrowRight
} from "react-icons/fa";

import { Link } from "react-router-dom";

const FooterContacto = () => {
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText("apencas03@gmail.com");

      setCopiado(true);

      setTimeout(() => {
        setCopiado(false);
      }, 2000);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <footer className="footer-contacto">

      <div className="footer-contact-card">

        <p className="footer-label">
          CONTACTO
        </p>

        <h2>
          ¿Hablamos?
        </h2>

        <p className="footer-description">
          Estoy disponible para nuevos proyectos,
          colaboraciones y oportunidades laborales.
          Si tienes una idea, estaré encantado de escucharla.
        </p>

        <Link
          to="/contacto"
          className="footer-button"
        >
          Contactar
          <FaArrowRight />
        </Link>

      </div>

      <div className="footer-info">

        <a
          href="tel:+34695453119"
          className="footer-item"
        >
          <FaPhoneAlt />

          <div>

            <span>Teléfono</span>

            <strong>
              +34 695 453 119
            </strong>

          </div>

        </a>

        <div
          className="footer-item email-item"
          onClick={copiarEmail}
        >

          <FaEnvelope />

          <div>

            <span>Email</span>

            <strong>
              apencas03@gmail.com
            </strong>

          </div>

          <div className="copy-tooltip">

            {copiado ? "¡Copiado!" : "Copiar"}

          </div>

        </div>

        <a
          href="https://www.linkedin.com/in/albert-pen-cas"
          target="_blank"
          rel="noreferrer"
          className="footer-item"
        >

          <FaLinkedin />

          <div>

            <span>LinkedIn</span>

            <strong>
              Albert Penadés
            </strong>

          </div>

        </a>

      </div>

      <div className="footer-copy">
        © 2026 Albert Penadés · visualFoldr
      </div>

    </footer>
  );
};

export default FooterContacto;
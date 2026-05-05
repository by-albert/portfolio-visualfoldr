import './Contacto.scss';

const Contacto = () => (
  <section id="contacto" className="contact-page">
    <div className="contact-card">
      <h2>Contacto</h2>
      <p>Disponible para proyectos, colaboraciones y encargos creativos.</p>

      <div className="contact-details">
        <div className="contact-detail">
          <h3>Teléfono</h3>
          <p>695453119</p>
        </div>

        <div className="contact-detail">
          <h3>Email</h3>
          <a href="mailto:apencas03@gmail.com">apencas03@gmail.com</a>
        </div>

        <div className="contact-detail">
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/albert-pen-cas" target="_blank" rel="noreferrer">
            linkedin.com/in/albert-pen-cas
          </a>
        </div>
      </div>

      <div className="contact-actions">
        <a className="contact-button" href="mailto:apencas03@gmail.com">Email</a>
        <a className="contact-link" href="https://www.linkedin.com/in/albert-pen-cas" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <button className="contact-button back-button" onClick={() => (window.location.hash = '')}>
          Inicio
        </button>
      </div>
    </div>
  </section>
);

export default Contacto;
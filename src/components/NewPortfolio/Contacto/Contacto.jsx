import React from 'react';
import './Contacto.scss';

const Contacto = () => {
  return (
    <footer id="contacto" className="footer-contacto">
      
      {/* Columna 1 */}
      <div className="footer-col">
        <h3>Contacto</h3>
        <p>Llama al: 695453119</p>
      </div>

      {/* Columna 2 */}
      <div className="footer-col">
        <h3>Email</h3>
        <p>apencas03@gmail.com</p>
      </div>

      {/* Columna 3 */}
      <div className="footer-col">
        <h3>LinkedIn</h3>
        <a href="https://www.linkedin.com/in/albert-pen-cas" target="_blank" rel="noreferrer"> Albert Penadés Casajús </a>
      </div>

    </footer>
  );
};

export default Contacto;
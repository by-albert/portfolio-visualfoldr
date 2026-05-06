import React, { useState } from 'react';
import './FooterContacto.scss';

const FooterContacto = () => {
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText('apencas03@gmail.com');
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <footer id="footer-contacto" className="footer-contacto">
      
      {/* Columna 1 */}
      <div className="footer-col">
        <h3>Contacto</h3>
        <p>Llama al: 695453119</p>
      </div>

      {/* Columna 2 */}
      <div className="footer-col">
        <h3>Email</h3>

        <div className="email-wrapper" onClick={copiarEmail}>
          <p className="email">apencas03@gmail.com</p>
          <span className="tooltip">
            {copiado ? 'Copiado' : 'Copiar'}
          </span>
        </div>

        {copiado && <span className="copiado-msg">¡Copiado!</span>}
      </div>

      {/* Columna 3 */}
      <div className="footer-col">
        <h3>LinkedIn</h3>
        <a 
          href="https://www.linkedin.com/in/albert-pen-cas" 
          target="_blank" 
          rel="noreferrer"
        >
          Albert Penadés Casajús
        </a>
      </div>

    </footer>
  );
};

export default FooterContacto;
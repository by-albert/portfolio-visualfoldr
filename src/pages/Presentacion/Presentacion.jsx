import React from 'react';
import './Presentacion.scss';

// import foto from '../../assets/img/foto-perfil.webp';

// BLOQUE DE "QUIEN SOY"
const Presentacion = () => {
  return (
    <section id="presentacion" className="presentacion">
      <div className="presentacion-container">
        

        {/* INFO */}
        <div className="presentacion-texto">

          <h1>¿Quién soy?</h1>

          <p>
            Soy Albert, fotógrafo y desarrollador web. 
            <br />
            Ayudo a marcas y empresas a mostrar
            su mejor versión mediante fotografías impactantes y experiencias web modernas.
          </p>

        </div>

        {/* IMAGEN */}
        <div className="presentacion-img">
          
          <img
            src="/img/foto-perfil.webp"
            alt="Foto de presentación"
            loading="lazy"
          />
          
          <div className="presentacion-cv">
            
            <a href="/cv-albert.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button"
            >
              Ver CV
            </a>
            
            </div>
          
          </div>
      </div>
    </section>
  );
};

export default Presentacion;
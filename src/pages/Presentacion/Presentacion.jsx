import React from 'react';
import './Presentacion.scss';

import foto from '../../assets/img/foto-perfil.webp';

// BLOQUE DE "QUIEN SOY"
const Presentacion = () => {
  return (
    <section id="presentacion" className="presentacion">
      <div className="presentacion-container">
        

        {/* INFO */}
        <div className="presentacion-texto">

          <h1>¿Quién soy?</h1>

          <p>
            Hola, soy Albert, fotógrafo y desarrollador web. Ayudo a personas, marcas y empresas a mostrar
            su mejor versión mediante imágenes impactantes y experiencias web modernas.
          </p>

          <p>
            Puedes ver mis mútliples proyectos en las secciones de experiencia y galería, échale un vistazo!
          </p>

        </div>

        {/* IMAGEN */}
        <div className="presentacion-img">
          
          <img src={foto} alt="Foto de presentación"/>
          
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
import React from 'react';
import './Presentacion.scss';

import foto from '../../assets/img/foto-perfil.png';


// BLOQUE DE "QUIEN SOY"
const Presentacion = () => {
  return (
    <section id="presentacion" className="presentacion">

      <div className="presentacion-container">

        {/* INFO */}
        <div className="presentacion-texto">

          <h1>¿Quién soy?</h1>

          <p>
            Soy Albert, fotógrafo y desarrollador web. Me dedico a crear experiencias visuales
            combinando diseño y tecnología.
          
          </p>

          <p>
            Puedes ver mis proyectos en las secciones de experiencia y galería!
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
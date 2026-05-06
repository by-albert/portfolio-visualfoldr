import React from 'react';
import './Presentacion.scss';

// URL de imagen (reemplaza con tu foto de perfils)
import foto from '../../../assets/img/foto-perfil.png';

const Presentacion = () => {
  return (
    <section id="presentacion" className="presentacion">

      <div className="presentacion-container">

        {/* Columna texto */}
        <div className="presentacion-texto">
          <h1>¿Quién soy?</h1>
          <p>Buenas soy Albert, fotógrafo y diseñador web. </p>

          <p>Con la ayuda de mi cámara soy capaz de detener el tiempo y al mismo tiempo
           las plasmo eb piezas únicas en internet. </p>

          <p>Podéis ver mis trabajos en el siguiente enlace:</p>
          {/* Aquí irá el botón que redirige a mis trabajos */}
          <button>Ver galeria</button>
        </div>

        {/* Columna imagen */}
        <div className="presentacion-img">
          <img src={foto} alt="Foto de mia de presentación"/>
        </div>

      </div>

    </section>
  );
};

export default Presentacion;
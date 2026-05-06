import React from 'react';
import './Presentacion.scss';
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
           las capturar piezas únicas para subirlas a internet. </p>

          <p>Podéis ver mis trabajos y fotografias en su respectiva sección.</p>
          {/* Aquí irá el botón que redirige a mis trabajos */}
          {/* <button>Ver trabajos</button>
          <button>Ver galería</button> */}
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
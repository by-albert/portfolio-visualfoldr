import React from 'react';
import './Formacion.scss';
import { Link } from 'react-router-dom';

function Formacion() {

  const education = [

    {
      id: 1,

      title: 'Fotografía',

      center: 'CFGS - EASD Josep Serra i Abella',

      year: 'Próximamente',

      description:
        'Ciclo superior de fotografía para aprender técnicas de composición, iluminación y edición fotográfica, desarrollando habilidades creativas.',

      skills: [
        'Próximamente',
      ]
    },
    {
      id: 2,

      title: 'Edición de vídeo y postproducción',

      center: 'Curso técnico - Esccola ESPAI',

      year: '2025 - 2026',

      description:
        'Formación enfocada a la edición de vídeo y contenido audiovisual, aprendiendo procesos de edición, narrativa visual y creación de contenido.',

      skills: [
        'Premiere Pro CC',
        'Adobe After Effects',
        'Ableton Live 12'
      ]
    },

    {
      id: 3,

      title: 'Desarrollo de Aplicaciones Web (DAW)',

      center: 'CFGS - Institut TIC de Barcelona',

      year: '2022 - 2025',

      description:
        'Formación enfocada al desarrollo web frontend y backend, trabajando proyectos reales, bases de datos, diseño responsive y metodologías de trabajo en equipo.',

      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Java',
        'Python',
        'React',
        'UI / UX',
        'Lighthouse',
        'Optimización de imágenes',
        'GIMP',
        'MySQL',
        'Figma',
        'Trello',
        'Arduino',
        'Git y GitHub',
        'Responsive Design',
        'Visual Studio Code',
        'Pycharm',
        'Eclipse'
      ]
    },

    {
      id: 4,

      title: 'Sistemas Microinformáticos y Redes (SMR)',

      center: 'CFGM - La Salle Barceloneta',

      year: '2020 - 2022',

      description:
        'Formación enfocada en sistemas informáticos, redes, hardware, mantenimiento de equipos y bases de programación.',

      skills: [
        'Windows',
        'Linux',
        'Virtual Box',
        'Hardware',
        'Cableado estructurado',
        'Aplicaciones Ofimáticas',
        'WordPress',
        'Cisco Packet Tracer',
        'Inglés técnico'  
      ]
    }
  ];

  return (

    <section className="formacion" id='formacion'>

      <div className="formacion-container">

        {/* HEADER */}

        <div className="formacion-header">

          <p className="formacion-label">
            Trayectoria educativa
          </p>

          <h2 className="formacion-title">
            Formación y aprendizaje
          </h2>

          <p className="formacion-subtitle">
            Mi evolución a lo largo de estos años.
          </p>

        </div>

        {/* GRID */}

        <div className="formacion-grid">

          {education.map((item) => (

            <article
              key={item.id}
              className="formacion-card"
            >

              {/* TOP */}

              <div className="formacion-top">

                <div>

                  <p className="formacion-center">
                    {item.center}
                  </p>

                  <h3>
                    {item.title}
                  </h3>

                </div>

                <span className="formacion-year">
                  {item.year}
                </span>

              </div>

              {/* DESCRIPTION */}

              <p className="formacion-description">
                {item.description}
              </p>

              {/* SKILLS */}

              <div className="formacion-skills">

                {item.skills.map((skill, index) => (

                  <span key={index}>
                    {skill}
                  </span>

                ))}

              </div>

            </article>

          ))}

        </div>

        {/* ========================= */}
        {/* ACTIONS */}
        {/* ========================= */}

        <div className="formacion-actions">
            <button
              className="formacion-btn"
              onClick={() =>
                document
                  .getElementById('galeria')
                  ?.scrollIntoView({
                    behavior: 'smooth'
                  })
              }
            >
              Ver galería
            </button>
            
            <Link to="/contacto" className="formacion-btn" >
             Contactar 
            </Link>

          </div>
      </div>

    </section>

  );

}

export default Formacion;
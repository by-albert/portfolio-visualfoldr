import React, { useState } from 'react';
import './Formacion.scss';
// import { Link } from 'react-router-dom';

function Formacion() {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) =>
      prev === education.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevCard = () => {
    setCurrentCard((prev) =>
      prev === 0
        ? education.length - 1
        : prev - 1
    );
  };
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
      ],
       mobileSkills: [
        'Próximamente'
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
      ],
       mobileSkills: [
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
        'JS',
        'Java',
        'Python',
        'React',
        'UI / UX',
        'Lighthouse',
        // 'Optimización de imágenes',
        'GIMP',
        'MySQL',
        'Figma',
        'Trello',
        'Arduino',
        'Git',
        'GitHub',
        'Responsive Design',
        'Visual Studio Code',
        // 'Pycharm',
        // 'Eclipse'
      ],
      mobileSkills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'MySQL',
        'Git'
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
        'Montaje de equipos', 
        'Mantenimiento de equipos',
        'Aplicaciones Ofimáticas',
        'WordPress',
        'Cisco Packet Tracer',
        'Inglés técnico',

      ],
      mobileSkills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'MySQL',
        'Git'
      ]
    }
  ];

  return (

    <section className="formacion" id='formacion'>

      <div className="formacion-container">

        {/* HEADER */}

        <div className="formacion-header">

          {/* <p className="formacion-label">
            Trayectoria educativa
          </p> */}

          <h2 className="formacion-title">
            Formación y aprendizaje
          </h2>

          <p className="formacion-subtitle">
            MI EVOLUCIÓN EDUCATIVA A LO LARGO DE LOS AÑOS.
          </p>

        </div>

          {/* DESKTOP */}

          <div className="formacion-grid desktop-grid">

            {education.map((item) => (

              <article
                key={item.id}
                className="formacion-card"
              >

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

                <p className="formacion-description">
                  {item.description}
                </p>

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

          {/* MOBILE */}

          <div className="formacion-slider">

            <button
              className="slider-arrow"
              onClick={prevCard}
            >
              ←
            </button>

            <article className="formacion-card">

              <div className="formacion-top">

                <div>

                  <p className="formacion-center">
                    {education[currentCard].center}
                  </p>

                  <h3>
                    {education[currentCard].title}
                  </h3>

                </div>

                <span className="formacion-year">
                  {education[currentCard].year}
                </span>

              </div>

              <p className="formacion-description">
                {education[currentCard].description}
              </p>

              <div className="formacion-skills">

                {education[currentCard].mobileSkills.map(
                  (skill, index) => (
                    <span key={index}>
                      {skill}
                    </span>
                  )
                )}

              </div>

            </article>

            <button
              className="slider-arrow"
              onClick={nextCard}
            >
              →
            </button>

          </div>

          <div className="slider-dots">

            {education.map((_, index) => (

              <button
                key={index}
                className={`slider-dot ${
                  currentCard === index
                    ? 'active'
                    : ''
                }`}
                onClick={() =>
                  setCurrentCard(index)
                }
              />

            ))}

          </div>
      </div>

    </section>

  );

}

export default Formacion;
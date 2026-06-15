import React, { useState } from 'react';
import './Experience.scss';
import { useNavigate } from 'react-router-dom';

import gloriaGrau from '../../assets/img/gloria-grau-ruiz.png';
import bitsAndAtoms from '../../assets/img/bits-and-atoms.png';
import dayOffEvents from '../../assets/img/day-off-events.png';
import contacto from '../../assets/img/contacto-icono.png';

function Experience() {

  const [selectedExperience, setSelectedExperience] = useState(null);
  const navigate = useNavigate();
  const experiences = [

    {
      id: 1,
      title: 'Exposición Artística - Gloria Grau',
      date: '2023',
      description:
        'Rediseño completo de una página web real para una clienta. Adapté una web antigua mejorando la estructura visual y la experiencia del usuario.',
      technologies: [
        'UI / UX',
        'IONOS',
        'Word',
        'Figma',
        'Canva',
        'HTML',
        'CSS',
        'JavaScript'
      ],
      image: gloriaGrau,
      url: 'https://gloriagrauruiz.com/'
    },

    {
      id: 2,
      title: 'Bits and Atoms - Admira',
      date: '2024',
      description:
        'Proyecto desarrollado durante mis prácticas en Admira para una startup tecnológica real.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Canva',
        'Figma',
        'Trello',
        'Git y GitHub'
      ],
      image: bitsAndAtoms,
      url: 'https://bitsandatoms.ai/'
    },

    {
      id: 4,
      title: 'Creador de contenido y desarrollador web - DAY OFF EVENTS',
      date: '2025',
      description:
        'Creé y gestioné contenido para redes sociales orientado a la promoción de eventos corporativos y sociales, adaptando el contenido visual a cada plataforma para mejorar su alcance y visibilidad.',
      technologies: [
        'Wordpress',
        'HTML',
        'CSS',
        'JavaScript',
        'Canva',
        'Trello',
        'Grok AI',
        'Suno AI'
      ],
      image: dayOffEvents,
      url: 'https://www.dayoffevents.com/'
    },

    {
      id: 5,
      title: '¡Se el siguiente!',
      date: 'Disponible actualmente',
      description:
        'Contáctame para cualquier tipo de información. ¡Hagamos que tu imagen cobre vida!',
      technologies: [],
      image: contacto,
      isContact: true
    }

  ];

  return (

    <section
      className="experience"
      id="trabajos"
    >

      <div className="experience-container">

        <div className="experience-header">

          <h2>
            Experiencia profesional
          </h2>

          <p className="experience-subtitle">
            Algunos proyectos que he realizado a lo largo de mi trayectoria.
          </p>

        </div>

        <div className="experience-grid">

          {experiences.map((experience) => (

            <article
              key={experience.id}
              className="experience-card"
              onClick={() => setSelectedExperience(experience)}
            >

              <div className="experience-preview">

                <img
                  src={experience.image}
                  alt={experience.title}
                  className="experience-image"
                />

              </div>

              <div className="experience-content">

                <h3>
                  {experience.title}
                </h3>

                <p>
                  {experience.description}
                </p>

                <div className="experience-tech">

                  {experience.technologies.map((tech, index) => (

                    <span key={index}>
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

      {selectedExperience && (

        <div
          className="experience-modal-overlay"
          onClick={() => setSelectedExperience(null)}
        >

          <div
            className="experience-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-modal"
              onClick={() => setSelectedExperience(null)}
            >
              ✕
            </button>

            <img
              src={selectedExperience.image}
              alt={selectedExperience.title}
              className="modal-image"
            />

            <div className="modal-content">

              <h2>
                {selectedExperience.title}
              </h2>

              <p className="experience-date">
                {selectedExperience.date}
              </p>

              <p>
                {selectedExperience.description}
              </p>

              <div className="experience-tech">

                {selectedExperience.technologies.map((tech, index) => (

                  <span key={index}>
                    {tech}
                  </span>

                ))}

              </div>

              {selectedExperience.isContact ? (
                <button
                className="modal-link"
                onClick={() => {
                  setSelectedExperience(null);
                  navigate('/contacto');
                }}
                >
                  Contactar
                  </button>
                  ) : (
                  <a
                  href={selectedExperience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                  >
                    Ver proyecto
                    </a>
                  )}
            </div>

          </div>

        </div>

      )}

    </section>

  );

}

export default Experience;
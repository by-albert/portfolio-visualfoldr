import React, { useState } from 'react';
import './Experience.scss';
import { useNavigate } from 'react-router-dom';

import gloriaGrau from '../../assets/img/gloria-grau-ruiz.webp';
import bitsAndAtoms from '../../assets/img/bits-and-atoms.webp';
import dayOffEvents from '../../assets/img/day-off-events.webp';
// import contacto from '../../assets/img/contacto-icono.webp';

function Experience() {

  const [selectedExperience, setSelectedExperience] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);
  const navigate = useNavigate();
  // Cartas para móvil
  const nextCard = () => {
      setCurrentCard((prev) =>
        prev === experiences.length - 1
          ? 0
          : prev + 1
      );
    };

    const prevCard = () => {
      setCurrentCard((prev) =>
        prev === 0
          ? experiences.length - 1
          : prev - 1
      );
    };
  const experiences = [

    {
      id: 1,
      title: 'Exposición de Arte',
      subtitle:'Gloria Grau Ruiz',

      summary: 'Rediseño de una web artística mejorando UX y accesibilidad.',
      
      date: 'Ene. 2023 - May. 2024',
      
      description:
        'Rediseño completo de una página web artística. Adapté una web antigua con errores de accesibilidad mejorando la estructura visual y la experiencia del usuario.',
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
      title: 'Bits and Atoms',
      subtitle:'Admira',
      date: 'Nov. 2024 - Abr. 2025',
      description:
      'Proyecto realizado para una startup tecnológica del sector IoT (Internet of Things), donde colaboré en el desarrollo y soluciones web mejorando en la experiencia digital del producto.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Canva',
        'Figma',
        'Trello',
        'Git',
        'Github'
      ],
      image: bitsAndAtoms,
      url: 'https://bitsandatoms.ai/'
    },

    {
      id: 4,
      title: 'Community Manager',
      subtitle:'Day Off Events',

      date: 'Enero. 2026 - Abr. 2026',
      description:
        'Creé y gestioné contenido para redes sociales promocionando eventos corporativos y sociales. Adaptando el contenido a cada plataforma y mejorar su alcance.',
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
    }

    // ,{
    //   id: 5,
    //   title: '¡Se el siguiente!',
    //   date: 'Disponible actualmente',
    //   description:
    //     'Contáctame para cualquier tipo de información. ¡Hagamos que tu imagen cobre vida!',
    //   technologies: [],
    //   image: contacto,
    //   isContact: true
    // }

  ];

  return (

    <section
      className="experience"
      id="trabajos">

      <div className="experience-container">

        <div className="experience-header">

          <h2>
            Experiencia profesional
          </h2>

          <p className="experience-subtitle">
            ALGUNOS PROYECTOS QUE HE REALIZADO HASTA EL DÍA DE HOY
          </p>
        </div>
            <div className="experience-grid desktop-grid">

              {experiences.map((experience) => (

                <article
                  key={experience.id}
                  className="experience-card"
                  onClick={() =>
                    setSelectedExperience(experience)
                  }
                >

                  <div className="experience-preview">
                    <img
                      src={experience.image}
                      alt={`${experience.title} - ${experience.subtitle}`}
                      className="experience-image"
                    />
                  </div>

                  <div className="experience-content">

                    <h3>{experience.title}</h3>
                    
                    <p className="experience-subtitle-card">
                      {experience.subtitle}
                    </p>
                    
                    <p className="experience-description-preview">
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

          <div className="experience-slider">

            <button
              className="slider-arrow"
              onClick={prevCard}
            >
              ←
            </button>

            <article
              className="experience-card"
              onClick={() =>
                setSelectedExperience(
                  experiences[currentCard]
                )
              }
            >

              <div className="experience-preview">

                <img
                  src={experiences[currentCard].image}
                  alt={experiences[currentCard].title}
                  className="experience-image"
                />

              </div>

              <div className="experience-content">

                <h3>
                  {experiences[currentCard].title}
                </h3>

                <p>
                  {experiences[currentCard].description}
                </p>

                <div className="bottom-card">
                  <div className="slider-hint"> Ver más</div>
                </div>

                <div className="experience-tech">

                  {experiences[currentCard].technologies.map(
                    (tech, index) => (
                      <span key={index}>
                        {tech}
                      </span>
                    )
                  )}

                </div>

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

            {experiences.map((_, index) => (

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
                aria-label={`Ir a tarjeta ${index + 1}`}
              />

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
              className="experience-modal-image"
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
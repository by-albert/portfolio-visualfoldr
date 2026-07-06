import React, { useState } from 'react';
import './Experience.scss';
import { useNavigate } from 'react-router-dom';

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

    // NUEVO
    

    // ANTIGUO
    const experiences = [
      {
        id: 1,
        title: 'Exposición de Arte',
        subtitle:'Gloria Grau Ruiz',
        summary: 'Rediseño de una web artística mejorando UX y accesibilidad.',
        date: 'Ene. 2023 - May. 2024',
        description:
        'Llevé a cabo el rediseño integral de una página web artística, modernizando una estructura desactualizada y corrigiendo problemas de accesibilidad, con el objetivo de mejorar la jerarquía visual, la usabilidad y la experiencia global del usuario.',
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
        image: '/img/gloria-grau-ruiz.webp',
        url: 'https://gloriagrauruiz.com/'
      },

      {
        id: 2,
        title: 'Bits and Atoms',
        subtitle:'Admira',
        summary: 'Startup tecnológica orientado a IoT (internet of things).',
        date: 'Nov. 2024 - Abr. 2025',
        description:
        'Participé en el desarrollo de soluciones web para una startup tecnológica del sector IoT (Internet of Things), colaborando en la implementación de mejoras funcionales y de interfaz con el objetivo de optimizar la experiencia digital del producto.',
        technologies: [
          'HTML',
          'CSS',
          'JavaScript',
          'Canva',
          'Figma',
          'Trello',
          'Git',
          'Github',
          'Arduino'
        ],
        image: '/img/bits-and-atoms.webp',
        
        url: 'https://bitsandatoms.ai/'
      },

      {
        id: 3,
        title: 'Community Manager',
        subtitle:'Day Off Events',
        summary: 'Gestioné contenido para redes sociales orientado a fiestas corporativas realizadas con IA de vídeo.',
        date: 'Enero. 2026 - Abr. 2026',
        description:
        'Diseñé, planifiqué y gestioné contenido para redes sociales orientado a la promoción de eventos corporativos y sociales, adaptando cada pieza a las distintas plataformas digitales para optimizar su alcance, coherencia visual y rendimiento.',
        technologies: [
          'TikTok',
          'Instagram',
          'LinkedIn',
          'Facebook',
          'YouTube',
          'Chat GPT',
          'Grok AI',
          'Suno AI',
        ],
        image: '/img/day-off-events.webp',
        url: 'https://www.dayoffevents.com/'
      },
      {
        id: 4,
        title: 'Reportero de evento',
        subtitle:'Fotógrafo partido solidario',
        summary: 'Partido solidario de fútbol sala dónde 15 equipos se enfrentarán.',
        date: 'Mayo 2026',
        description:
        'Realicé un reportaje fotográfico para un evento de fútbol sala en el que participaron 15 equipos. Durante el evento me encargué de capturar todos los partidos que se disputaban. Al mismo tiempo iba reforzando mi capacidad para reaccionar con rapidez, anticiparme a cada jugada y entregar un trabajo de calidad en un entorno de ritmo constante.',
        technologies: [
          'Sony A6400',
          'LightRoom Classic',
          'Pic-Time',
        ],
        image: '/img/partido_solidario.webp',
        url: 'https://visualfoldr.pic-time.com/z7aIKLxFXYGtI'
      },
      {
        id: 5,
        title: 'WE DANCE BAND',
        subtitle:'Fotógrafo concierto',
        summary: 'Cobertura fotográfica de un concierto de una banda celebrado durante las fiestas de la Eixample en Barcelona.',
        date: 'Abril 2026',
        description:
        'Cobertura fotográfica de un concierto de una banda tributo celebrado durante las Fiestas de la Eixample, capturando la energía del directo, la conexión con el público y los momentos más representativos de la actuación.',
        technologies: [
          'Sony A6400',
          'LightRoom Classic',
          'Pic-Time',
          'Instagram'
        ],
        image: '/concerts/wedance/WDB-05.webp',
        url: 'https://visualfoldr.pic-time.com/tJlAuSNLpyI3n'
      },
      {
        id: 6,
        title: 'Coratge',
        subtitle:'Fótógrafo de concierto',
        summary: 'Concierto para celebrar la 10ª edición del grupo de rock catalana.',
        date: 'Junio 2026',
        description:
        'Tuve la oportunidad de realizar un reportaje fotográfico para un grupo de música durante el lanzamiento de su nuevo en directo. Me encargué de documentar la actuación, capturando los momentos más representativos del concierto, la interacción entre los integrantes de la banda y la conexión con el público, creando un reportaje visual que transmitiera la energía y la personalidad del evento.',
        technologies: [
          'Sony A6400',
          'LightRoom Classic',
          'Pic-Time',
          'Instagram'
        ],
        image: '/concerts/coratge/coratge-03.webp',
        url: 'https://visualfoldr.pic-time.com/client/coratge-fotos-concert'
      },
      {
        id: 7,
        title: 'NOLOGOS ⭐⭐⭐⭐',
        subtitle:'Sessión de fotos de moda',
        summary: 'Sesión fotográfica de estilo streetwear para un marca de ropa inspirado en el mundial de fútbol Epaña.',
        date: 'Mayo 2026',
        description:
        'Sesión fotográfica de estilo streetwear realizada para la presentación de una colección inspirada en la Copa Mundial de Fútbol de 2026, combinando moda urbana, identidad visual y una estética contemporánea al aire libre.',
        technologies: [
          'Sony A6400',
          'LightRoom Classic',
          'Pic-Time',
          'Instagram'
        ],
        image: '/moda/nologos-01.webp',
        url: 'https://visualfoldr.pic-time.com/TgchnvGRE9eE8'
      }
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
              Proyectos realizados hasta el día de hoy.
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
                        loading = 'lazy'
                        className="experience-image"
                      />
                    </div>

                    <div className="experience-content">

                      <h3>{experience.title}</h3>
                      
                      <p className="experience-subtitle-card">
                        {experience.subtitle}
                      </p>
                      
                      <p className="experience-description-preview">
                        {experience.summary}
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
                    loading = 'lazy'
                    className="experience-image"
                  />

                </div>

                <div className="experience-content">

                  <h3>
                    {experiences[currentCard].title}
                  </h3>

                  <p className="experience-subtitle-card">
                    {experiences[currentCard].subtitle}
                  </p>

                  <p className="experience-description-preview">
                    {experiences[currentCard].summary}
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
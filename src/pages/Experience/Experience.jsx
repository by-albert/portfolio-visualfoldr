import React from 'react';
import './Experience.scss';

import gloriaGrau from '../../assets/img/gloria-grau-ruiz.png';
import bitsAndAtoms from '../../assets/img/bits-and-atoms.png';

function Experience() {

  const experiences = [

  {
    id: 1,
    title: 'Exposición Artística - Gloria Grau',
    description:
      'Rediseño completo de una página web real para una clienta. Adapté una web antigua mejorando la estructura visual y la experiencia del usuario.',
    technologies: [
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
    id: 3,
    title: 'Video Vlog - Bits and Atoms',
    description:
      'Vídeo realizado durante mis prácticas mostrando el día a día del proyecto.',
    technologies: [
      'DaVinci Resolve',
      'Insta Studio 360',
      'BlackMagic Design',
      'Trello',
      'Suno AI',
    ],
    image: bitsAndAtoms,
    url: 'https://bitsandatoms.ai/'
  }

];

  return (

    <section className="experience">

      <div className="experience-container">

        <div className="experience-header">

          <h2>
            Experiencia profesional
          </h2>

          <p className="experience-subtitle">
            Algunos proyectos y experiencias que he realizado.
          </p>

        </div>

        <div className="experience-grid">

          {experiences.map((experience) => (

            <article
              key={experience.id}
              className="experience-card"
            >

              {/* PLACEHOLDER FUTURO */}

              <a
              href={experience.url}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-preview"
              >
                <img
                src={experience.image}
                alt={experience.title}
                className="experience-image"
                />
                </a>

              {/* CONTENIDO */}

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

    </section>

  );

}

export default Experience;
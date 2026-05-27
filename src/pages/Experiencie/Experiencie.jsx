import React from 'react';
import './Experiencie.scss';

function Experience() {

  const experiences = [

    {
      id: 1,

      title: 'Exposición Artística - Gloria Grau',

      description:
        'Primera página web que rediseñé completamente para una clienta. Partiendo de una antigua web y adaptándola para sus necesidades, mejorando la experiencia del usuario.',

      technologies: [
        'IONOS',
        'Word',
        'Figma',
        'Canva',
        'HTML',
        'CSS',
        'JavaScript'
      ],

      url: 'https://gloriagrauruiz.com/'
    },

    {
      id: 2,

      title: 'Bits and Atoms - Admira',

      description:
        'Proyecto realizado en grupo. Tuvimos que crear la página web para una startup emergente en el sector tecnológico.',

      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Canva',
        'Figma',
        'Trello',
        'GitHub',
        'Git'
      ],

      url: 'https://bitsandatoms.ai/'
    },

    {
      id: 3,

      title: 'Video Vlog - Bits and Atoms',

      description:
        'Este vídeo nació al mismo tiempo que estaba realizando las prácticas en Admira. Todo salió de la idea de mostrar cómo es el día a día.',

      technologies: [
        'DaVinci Resolve',
        'Trello',
        'Word'
      ],

      url: 'https://bitsandatoms.ai/'
    }

  ];

  return (

    <section className="experience">

      <div className="experience-container">

        <div className="experience-header">

          <h2>
            Experiencia
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

                <div className="experience-placeholder">

                  <span>
                    Próximamente
                  </span>

                </div>

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
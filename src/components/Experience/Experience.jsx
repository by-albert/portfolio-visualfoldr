import React from 'react';
import './Experience.scss';

// Importar imágenes de proyectos - reemplaza con tus propias imágenes
import gloriaGrau from '../../assets/img/proyectos/gloria-grau/GloriaGrauRuiz.png';
import BitsAndAtoms from '../../assets/img/proyectos/bits-and-atoms/BitsAndAtoms.png';
import videoBits from '../../assets/img/proyectos/video-bits/vlogBitsAtoms.mp4';
// import proyecto4 from '../../assets/img/proyectos/proyecto-4/preview.png';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Exposición Artística - Gloria Grau',
      description: 'Primera página web que rediseñé completamente para una clienta. Partiendo de una antigua web y adaptándola para sus necesidades, mejorando la experiencia del usuario.',
      technologies: ['IONOS', 'Word', 'Figma', 'Canva', 'HTML', 'CSS', 'JavaScript'],
      image: gloriaGrau,
      url: 'https://gloriagrauruiz.com/'
    },
    {
      id: 2,
      title: 'Bits and Atoms - Admira',
      description: 'Proyecto realizado en grupo. Tuvimos que crear la página web para una startup emergente en el sector tecnológico.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Canva', 'Fimga', 'Trello', 'GitHub', 'Git'],
      image: BitsAndAtoms,
      url: 'https://bitsandatoms.ai/'
    },
    {
       id: 3,
       title: 'Video Vlog - Bits and Atoms',
       description: 'Este vídeo nació al mismo tiempo que estaba realizando las prácticas en Admira. Todo salió de la idea de mostrar como es el día a día. Este vídeo fue grabado y editado por mí, lo podéis encontrar en Bits and Atoms.',
       technologies: ['DaVinci Resolve', 'Trello', 'Word'],
       video: videoBits,
       url: 'https://bitsandatoms.ai/'
     },
  ];

  // Funcionamiento del componente
  return (
    <section className="experience">
      <h2>Experiencia</h2>
      <p className="experience-subtitle">Todos estos proyectos los podéis visitar haciendo click en la imagen correspondiente.</p>

      <div className="experience-grid">
        {experiences.map(experience => (
          <div key={experience.id} className="experience-card">
            <div className="experience-image">
              {experience.video ? (
                // Render video if provided
                experience.url ? (
                  <a href={experience.url} target="_blank" rel="noopener noreferrer">
                    <video
                      src={experience.video}
                      controls
                      preload="metadata"
                      className="experience-video"
                      aria-label={`${experience.title} video`}
                    />
                  </a>
                ) : (
                  <video
                    src={experience.video}
                    controls
                    preload="metadata"
                    className="experience-video"
                    aria-label={`${experience.title} video`}
                  />
                )
              ) : (
                experience.url ? (
                  <a href={experience.url} target="_blank" rel="noopener noreferrer">
                    <img src={experience.image} alt={experience.title} />
                  </a>
                ) : (
                  <img src={experience.image} alt={experience.title} />
                )
              )}
            </div>
            <div className="experience-content">
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
              <div className="experience-tech">
                {experience.technologies.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
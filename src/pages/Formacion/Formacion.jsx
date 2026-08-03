import "./Formacion.scss";

function Formacion() {

  const education = [

    {
      id: 1,
      title: "Fotografía",
      center: "CFGS - EASD Josep Serra i Abella",
      year: "Próximamente",
      description:
        "Ciclo superior de fotografía para aprender técnicas de composición, iluminación y edición fotográfica, desarrollando habilidades creativas.",
      skills: [
        "Próximamente"
      ]
    },

    {
      id: 2,
      title: "Edición de vídeo y postproducción",
      center: "Curso técnico - Escola ESPAI",
      year: "2025 - 2026",
      description:
        "Formación enfocada a la edición de vídeo y contenido audiovisual, aprendiendo procesos de edición, narrativa visual y creación de contenido.",
      skills: [
        "Premiere Pro CC",
        "Adobe After Effects",
        "Ableton Live 12"
      ]
    },

    {
      id: 3,
      title: "Desarrollo de Aplicaciones Web (DAW)",
      center: "CFGS - Institut TIC de Barcelona",
      year: "2022 - 2025",
      description:
        "Formación enfocada al desarrollo web frontend y backend, trabajando proyectos reales, bases de datos, diseño responsive y metodologías de trabajo en equipo.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Python",
        "Java",
        "MySQL",
        "Git",
        "GitHub",
        "Responsive Design",
        "Figma",
        "Lighthouse",
        "Visual Studio Code",
        "Trello",
        "Arduino",
        "GIMP"
      ]
    },

    {
      id: 4,
      title: "Sistemas Microinformáticos y Redes (SMR)",
      center: "CFGM - La Salle Barceloneta",
      year: "2020 - 2022",
      description:
        "Formación enfocada en sistemas informáticos, redes, hardware, mantenimiento de equipos y bases de programación.",
      skills: [
        "Windows",
        "Linux",
        "VirtualBox",
        "Hardware",
        "Montaje de equipos",
        "Mantenimiento",
        "WordPress",
        "Cisco Packet Tracer",
        "Inglés Técnico"
      ]
    }

  ];

  return (

    <section
      className="formacion"
      id="formacion"
    >

      <div className="formacion-container">

        <div className="formacion-header">

          <h2 className="formacion-title">
            Formación y aprendizaje
          </h2>

          <p className="formacion-subtitle">
            Mi evolución educativa a lo largo de los años.
          </p>

        </div>

        <div className="formacion-grid">

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

      </div>

    </section>

  );

}

export default Formacion;
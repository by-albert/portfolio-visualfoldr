import './PortfolioVisual.scss';


const projects = [
  {
    title: "NOLOGOS",
    category: "Moda",
    year: "2026",
    image: "/experimental/gaviota.webp"
  },
  {
    title: "MARBELLA",
    category: "Skate",
    year: "2026",
    image: "/skate/sk8-01.webp"
  },
  {
    title: "STA COLOMA",
    category: "Fútbol Sala",
    year: "2026",
    image: "/futbol-sala/StColoma/StColoma-06.webp"
  }
];


const VisualPortfolio = () => {


  return (
    <main className="visual-portfolio">


      {/* HERO */}

      <section className="visual-hero">

        <p>
          VISUALFOLDR
        </p>

        <h1>
          No hago fotos.
          <br />
          Construyo historias visuales.
        </h1>


      </section>



      {/* FEATURE IMAGE */}

      <section className="visual-feature">

        <img
          src="/experimental/gaviota.webp"
          alt=""
        />

      </section>



      {/* INTRO */}

      <section className="visual-intro">

        <h2>
          Una colección de momentos,
          personas y lugares.
        </h2>

        <p>
          Cada proyecto tiene una historia,
          una identidad y una forma diferente
          de mirar el mundo.
        </p>

      </section>



      {/* PROJECTS */}


      <section className="visual-projects">


        {
          projects.map((project,index)=>(

            <article
              className="visual-project"
              key={index}
            >


              <img
                src={project.image}
                alt={project.title}
              />


              <div className="project-info">


                <span>
                  {project.category}
                </span>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.year}
                </p>


              </div>


            </article>

          ))
        }


      </section>



      {/* END */}

      <section className="visual-end">

        <h2>
          ¿Creamos algo juntos?
        </h2>

        <button>
          Contactar
        </button>

      </section>

    </main>
  );
};


export default VisualPortfolio;
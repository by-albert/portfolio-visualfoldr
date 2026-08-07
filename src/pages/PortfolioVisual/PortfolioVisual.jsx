import './PortfolioVisual.scss';

import { Link } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: 'MODA',
    description: 'Editorial · Campañas · Producto', 
    image: '/moda/NOLOGOS/MUNDIAL_ESP/nologos-38.webp',
    path: '/galeria/moda',
  },
  {
    title: 'SKATE',
    description: 'Deporte · Calle · Movimiento',
    image: '/skate/sk8-19.webp',
    path: '/galeria/skate',
  },
  {
    title: 'CONCIERTOS',
    description: 'Música · Directo · Escena',
    image: '/concerts/coratge/coratge-01.webp',
    path: '/galeria/conciertos',
  },
  {
    title: 'FÚTBOL SALA',
    description: 'Deporte · Acción · Competición',
    image: '/futbol-sala/StColoma/StColoma-24.webp',
    path: '/galeria/futbol-sala',
  },
  {
    title: 'EXPERIMENTAL',
    description: 'Conceptual · Personal · Visual',
    image: '/experimental/gaviota.webp',
    path: '/galeria/experimental',
  },
];

const VisualPortfolio = () => {
  return (
    <main className="visual-portfolio">

      {/* HEADER */}

      <header className="visual-portfolio-header">

        <span className="portfolio-label">
          VISUALFOLDR
        </span>

        <h1>
          PORTFOLIO
        </h1>

        <p>
          Una selección de proyectos,
          historias y fotografías.
        </p>

      </header>

     <section className="portfolio-back">

        <Link to="/" className="portfolio-back-button">

          <span className="portfolio-back-arrow">
            ←
          </span>

          <span>
            Volver
          </span>

        </Link>

      </section>



      {/* CATEGORÍAS */}

      <section className="portfolio-categories">

        {categories.map((category, index) => (

          <a
            href={category.path}
            className="portfolio-category"
            key={category.title}
          >

            {/* IMAGEN */}

            <div className="portfolio-category-image">

              <img
                src={category.image}
                alt={category.title}
                loading={index === 0 ? 'eager' : 'lazy'}
              />

            </div>


            {/* INFORMACIÓN */}

            <div className="portfolio-category-info">

              <span className="portfolio-category-number">
                0{index + 1}
              </span>

              <div>

                <span className="portfolio-category-description">
                  {category.description}
                </span>

                <h2>
                  {category.title}
                </h2>

              </div>

              <span className="portfolio-category-arrow">
                →
              </span>

            </div>

          </a>

        ))}

      </section>


      {/* FOOTER */}

      <footer className="visual-portfolio-footer">

        <span>
          VISUALFOLDR
        </span>

        <p>
          Fotografía · Dirección visual · Contenido
        </p>

      </footer>

    </main>
  );
};

export default VisualPortfolio;
import React, { useEffect, useState } from 'react';
import './Menu.scss';
import { useNavigate } from 'react-router-dom';

import BubbleText from "../../components/BubbleText/bubbleText.jsx";

import foto1 from '../../assets/backgrounds/foto-1.jpg';
import foto2 from '../../assets/backgrounds/foto-2.jpg';
import foto3 from '../../assets/backgrounds/foto-3.jpg';
import foto4 from '../../assets/backgrounds/foto-4.jpg';

const images = [foto1, foto2, foto3, foto4];

const NewPortfolio = () => {

  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();

  /* ========================= */
  /* CAROUSEL */
  /* ========================= */

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);

  }, []);


  return (

    <div className="new-portfolio">

      {/* BACKGROUND */}
      <div
        className="background-carousel"
        style={{
          backgroundImage: `url(${images[current]})`
        }}
      />

      {/* CONTENIDO */}
      <div className="content">

        <div className="hero-center">

          <div className="hero-brand">
            <BubbleText text="VISUAL FOLDR" />
          </div>

          <p className="hero-slogan">
            Fotógrafo y desarrollador web visual
          </p>

          <p className="subtitle-menu">
            Albert Penadés Casajús
          </p>

        </div>

        {/* SCROLL INDICATOR */}
        <div
          className="scroll-indicator"
          onClick={() =>
            document
              .getElementById('presentacion')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <span></span>
        </div>

      </div>

      {/* MENÚ */}
      <nav className="side-menu">

        <ul className="side-menu__list">

          <li>
            <button
              className="side-menu__link"
              onClick={() =>
                document
                  .getElementById('presentacion')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              ¿Quién soy?
            </button>
          </li>

          <li>
            <button
              className="side-menu__link"
              onClick={() =>
                document
                  .getElementById('galeria')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Galería
            </button>
          </li>

          <li>
            <button
              className="side-menu__link"
              onClick={() =>
                document
                  .getElementById('trabajos')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Experiencia
            </button>
          </li>

          <li>
            <button
              className="side-menu__link"
              onClick={() =>
                document
                  .getElementById('formacion')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Formación
            </button>
          </li>

          <li>
            <button
              className="side-menu__link"
              onClick={() => navigate('/contacto')}
            >
              Contacto
            </button>
          </li>

        </ul>

      </nav>

    </div>

  );

};

export default NewPortfolio;
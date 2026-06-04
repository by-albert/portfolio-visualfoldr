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

      {/* CONTENIDO CENTRAL */}
      <div className="content">

        <div className="mobile-title">

          <div className="title-line">
            <BubbleText text="VISUAL" />
          </div>

          <div className="title-line">
            <BubbleText text="FOLDR" />
          </div>

          <p className="subtitle-menu">
            © Albert Penadés Casajús
          </p>

        </div>

        {/* INDICADOR SCROLL */}
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

      {/* MENU LATERAL DERECHO */}
      <nav className="top-menu side-menu">

        <ul className="top-menu__list">

          <li>
            <button
              onClick={() =>
                document
                  .getElementById('presentacion')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="top-menu__link"
            >
              ¿Quién soy?
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate('/galeria')}
              className="top-menu__link"
            >
              Galerías
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                document
                  .getElementById('trabajos')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="top-menu__link"
            >
              Experiencia
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate('/contacto')}
              className="top-menu__link"
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
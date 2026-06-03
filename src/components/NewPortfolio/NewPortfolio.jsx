import React, { useEffect, useState } from 'react';
import './NewPortfolio.scss';
import { useNavigate } from 'react-router-dom';

import BubbleText from "../../components/BubbleText/bubbleText";

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

      setCurrent((prev) =>
        (prev + 1) % images.length
      );

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

        {/* TITULO */}

        <div className="mobile-title">

          <div className="title-line">
            <BubbleText text="VISUAL" />
          </div>

          <div className="title-line">
            <BubbleText text="FOLDR" />
          </div>

        </div>

        {/* MENU */}

        <nav className="top-menu">

          <ul className="top-menu__list">

            <li>
              <button
                onClick={() =>
                  document
                    .getElementById('presentacion')
                    ?.scrollIntoView({
                      behavior: 'smooth'
                    })
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

            {/* NO lo elimino (de momento) */}
            {/* <li>
              <button
                onClick={() => navigate('/trabajos')}
                className="top-menu__link"
              >
                Trabajos
              </button>
            </li> */}
            {/* Sustituyo Trabajo por exp */}
            <li>
              <button onClick={() => document.getElementById('trabajos') ?.scrollIntoView({
                behavior: 'smooth'
              })
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


    </div>

  );

};

export default NewPortfolio;  
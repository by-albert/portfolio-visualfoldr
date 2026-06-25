import React, { useEffect, useState } from 'react';
import './Menu.scss';
import { useNavigate } from 'react-router-dom';


// PARA LAS LETRAS
import BubbleText from "../../components/BubbleText/bubbleText.jsx";

/* ========================= */
/* DESKTOP */
/* ========================= */

import foto1 from '../../assets/backgrounds/desktop/foto-1.webp';
import foto2 from '../../assets/backgrounds/desktop/foto-2.webp';
import foto3 from '../../assets/backgrounds/desktop/foto-3.webp';
import foto4 from '../../assets/backgrounds/desktop/foto-4.webp';

/* ========================= */
/* MOBILE */
/* ========================= */

import fotoMobile1 from '../../assets/backgrounds/mobile/foto-mobile-1.webp';
import fotoMobile2 from '../../assets/backgrounds/mobile/foto-mobile-2.webp';
import fotoMobile3 from '../../assets/backgrounds/mobile/foto-mobile-3.webp';
import fotoMobile4 from '../../assets/backgrounds/mobile/foto-mobile-4.webp';

const desktopImages = [
  foto1,
  foto2,
  foto3,
  foto4
];

const mobileImages = [
  fotoMobile1,
  fotoMobile2,
  fotoMobile3,
  fotoMobile4
];

const NewPortfolio = () => {

  const [current, setCurrent] = useState(0);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  const navigate = useNavigate();

  /* ========================= */
  /* DETECTAR DISPOSITIVO */
  /* ========================= */

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () =>
      window.removeEventListener('resize', handleResize);

  }, []);

  /* ========================= */
  /* IMÁGENES ACTIVAS */
  /* ========================= */

  const images = isMobile
    ? mobileImages
    : desktopImages;

  /* ========================= */
  /* CAROUSEL */
  /* ========================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent(prev =>
        (prev + 1) % images.length
      );

    }, 4000);

    return () => clearInterval(interval);

  }, [images.length]);

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
            Fotógrafo y desarrollador frontend
          </p>

          <p className="subtitle-menu">
            Albert Penadés Casajús
          </p>

        </div>

        <div
          className="scroll-indicator"
          onClick={() =>
            document
              .getElementById('presentacion')
              ?.scrollIntoView({
                behavior: 'smooth'
              })
          }
        >
          <span></span>
        </div>

      </div>

      {/* NAVEGADOR */}

      <nav className="side-menu">

        <ul className="side-menu__list">
          <li>
            <button
              className="side-menu__link"
              onClick={() =>
                document
                  .getElementById('presentacion')
                  ?.scrollIntoView({
                    behavior: 'smooth'
                  })
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
                  ?.scrollIntoView({
                    behavior: 'smooth'
                  })
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
                  ?.scrollIntoView({
                    behavior: 'smooth'
                  })
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
                  ?.scrollIntoView({
                    behavior: 'smooth'
                  })
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
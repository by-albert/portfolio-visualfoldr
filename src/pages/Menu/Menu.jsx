import React, { useEffect, useState } from 'react';
import './Menu.scss';
import { useNavigate } from 'react-router-dom';


// PARA LAS LETRAS
import BubbleText from "../../components/BubbleText/bubbleText.jsx";

const desktopImages = [
  '/backgrounds/desktop/foto-1.webp',
  '/backgrounds/desktop/foto-3.webp',
  '/backgrounds/desktop/foto-4.webp',
  '/backgrounds/desktop/coratge-01.webp',
  '/backgrounds/desktop/coratge-16.webp'
];

const mobileImages = [
  '/backgrounds/mobile/foto-mobile-1.webp',
  '/backgrounds/mobile/foto-mobile-2.webp',
  '/backgrounds/mobile/foto-mobile-3.webp',
  '/backgrounds/mobile/foto-mobile-4.webp',
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
  let interval;

  const timeout = setTimeout(() => {
    interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
  }, 2500);

  return () => {
    clearTimeout(timeout);
    if (interval) clearInterval(interval);
  };
}, [images.length]);

  return (

    <div className="new-portfolio">

      {/* BACKGROUND */}

      <img
          className="background-carousel"
          src={images[current]}
          alt=""
          fetchPriority="high"
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
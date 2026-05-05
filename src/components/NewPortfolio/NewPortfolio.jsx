import React, { useEffect, useState } from 'react';
import './NewPortfolio.scss';
import BubbleText from "../BubbleText/bubbleText";

const images = [
  '/backgrounds/foto-1.jpg',
  '/backgrounds/foto-2.jpg',
  '/backgrounds/foto-3.jpg',
  '/backgrounds/foto-4.jpg'
];

const NewPortfolio = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // cambia cada 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="new-portfolio">

      {/* BACKGROUND DINÁMICO */}
      <div
        className="background-carousel"
        style={{
          backgroundImage: `url(${images[current]})`
        }}
      />

      {/* CONTENIDO */}
      <div className="content">
        <h1><BubbleText text="VISUALFOLDR" /></h1>
        {/* <p>2026</p> */}
        
        <nav className="top-menu">
          <ul className="top-menu__list">
            <li><a href="#presentacion" className="top-menu__link">¿Quién soy?</a></li>
            <li><a href="#" className="top-menu__link">Galeria</a></li>
            <li><a href="#" className="top-menu__link">Trabajos</a></li>
            <li><a href="/#/contacto" target="_blank" rel="noreferrer" className="top-menu__link">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NewPortfolio;
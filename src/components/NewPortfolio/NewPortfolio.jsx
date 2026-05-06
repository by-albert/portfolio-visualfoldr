import React, { useEffect, useState } from 'react';
import './NewPortfolio.scss';
import { Link } from 'react-router-dom';
import BubbleText from "../BubbleText/bubbleText";
import foto1 from '../../assets/backgrounds/foto-1.jpg';
import foto2 from '../../assets/backgrounds/foto-2.jpg';
import foto3 from '../../assets/backgrounds/foto-3.jpg';
import foto4 from '../../assets/backgrounds/foto-4.jpg';

const images = [
  foto1,
  foto2,
  foto3,
  foto4
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
            <li><Link to="/#presentacion" className="top-menu__link">¿Quién soy?</Link></li>
            <li><Link to="/galeria" className="top-menu__link">Galeria de imágenes</Link></li>
            <li><a href="#" className="top-menu__link">Trabajos</a></li>
            <li><Link to="/contacto" className="top-menu__link">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NewPortfolio;
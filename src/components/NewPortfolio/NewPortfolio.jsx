import React from 'react';
import './NewPortfolio.scss';
import BubbleText from "../BubbleText/BubbleText";

const NewPortfolio = () => {
  return (
    <div className="new-portfolio">

      {/* Galeria de fotos background */}
      <div className="background-carousel">
        <div className="background-carousel__slide slide-1"></div>
        <div className="background-carousel__slide slide-2"></div>
        <div className="background-carousel__slide slide-3"></div>
        <div className="background-carousel__slide slide-4"></div>
      </div>

      {/* Inicio página */}
      <div className="content">
        <h1><BubbleText text="VISUALFOLDR" /></h1>
        <p>2026</p>
        <nav className="top-menu">
          <ul className="top-menu__list">
            <li className="top-menu__item"><a href="#presentacion" className="top-menu__link">Quien soy?</a></li>
            <li className="top-menu__item"><a href="#" className="top-menu__link">Futbol sala</a></li>
            <li className="top-menu__item"><a href="#" className="top-menu__link">Conciertos</a></li>
            <li className="top-menu__item"><a href="#" className="top-menu__link">Skate</a></li>
            <li className="top-menu__item"><a href="#contacto" className="top-menu__link">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NewPortfolio;
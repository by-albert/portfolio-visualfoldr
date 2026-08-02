import './PortfolioCTA.scss';
import { Link } from "react-router-dom";


const PortfolioCTA = ({ variant = "compact" }) => {

  // PORTAFOLIO CAJA
  return (
    <section className={`portfolio-hero ${variant}`}>

      <Link 
        to="/portfolio" 
        className="portfolio-hero-card"
      >

        <div className="portfolio-overlay" />

        <img
          src="/experimental/gaviota.webp"
          alt="Portfolio VisualFoldr"
          className="portfolio-background"
        />

        <div className="portfolio-content">

          <span className="portfolio-tag">
            VISUALFOLDR
          </span>

          <h2>
            Portafolio fotográfico
          </h2>

          <p>
            Descubre todas las sesiones y proyectos personales.
          </p>

          <div className="portfolio-button">
            Explorar portfolio
          </div>

        </div>

      </Link>

    </section>
  );
};

export default PortfolioCTA;
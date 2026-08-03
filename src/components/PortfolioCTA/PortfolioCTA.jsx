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
          src="/skate/sk8-17.webp"
          alt="Portfolio VisualFoldr"
          className="portfolio-background"
        />

        <div className="portfolio-content">

          <span className="portfolio-tag">
            VISUALFOLDR
          </span>

          <h2>
            Portafolio completo
          </h2>

          <span className="portfolio-arrow">
            Explorar →
          </span>

        </div>

      </Link>

    </section>
  );
};

export default PortfolioCTA;
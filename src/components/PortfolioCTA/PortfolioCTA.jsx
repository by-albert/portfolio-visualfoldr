import './PortfolioCTA.scss';
import { Link } from "react-router-dom";

// La foto scroll
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const PortfolioCTA = ({ variant = "compact" }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {

  gsap.fromTo(
    imageRef.current,
    {
      yPercent: 35
    },
    {
      yPercent: -35,
      ease: "none",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    }
  );

}, []);

  // PORTAFOLIO CAJA
  return (
    <section className={`portfolio-hero ${variant}`}>

      <Link ref={cardRef} to="/portfolio" className="portfolio-hero-card">

        <div className="portfolio-overlay" />

        <img
          ref={imageRef}
          src="/skate/sk8-17.webp"
          alt="Portfolio VisualFoldr"
          className="portfolio-background"
          />

        <div className="portfolio-content">

          <span className="portfolio-tag">
            VISUALFOLDR
          </span>

          <h2>
            Portafolio fotográfico completo
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
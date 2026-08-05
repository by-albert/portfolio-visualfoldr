import "./Galeria.scss";

import PortfolioCTA from "../../components/PortfolioCTA/PortfolioCTA";
import useReveal from "../../components/hooks/useReveal";


// =========================
// DATA
// =========================

const gallerySections = [
  {
    categoria: "Moda",

    sesiones: [

      {
        titulo: "NOLOGOS",

        imagenes: [
          "/moda/NOLOGOS/MUNDIAL_ESP/nologos-37.webp",
          "/moda/NOLOGOS/MUNDIAL_ESP/nologos-43.webp",
          "/moda/NOLOGOS/MUNDIAL_ESP/nologos-02.webp",
          "/moda/NOLOGOS/MUNDIAL_ESP/nologos-34.webp",

          // VERANO
          "/moda/NOLOGOS/SUMMER/NOLOGOS_S01.webp",
          "/moda/NOLOGOS/SUMMER/NOLOGOS_S19.webp",
          "/moda/NOLOGOS/SUMMER/NOLOGOS_S27.webp",
          "/moda/NOLOGOS/SUMMER/NOLOGOS_S29.webp",

        ],
      },

    ],
  }, 
  {
    categoria: "Conciertos",

    sesiones: [

      {
        titulo: "Coratge y  We Dance Band",

        imagenes: [
          "/concerts/coratge/coratge-02.webp",
          "/concerts/coratge/coratge-24.webp",
          "/concerts/wedance/WDB-08.webp",
          "/concerts/wedance/WDB-09.webp",
        ],
      },
    ],
  },
  {
    categoria: "Deportes",

    sesiones: [

      {
        titulo: "Santa Coloma vs Valdepeñas",

        imagenes: [
          "/futbol-sala/StColoma/StColoma-24.webp",
          "/futbol-sala/StColoma/StColoma-19.webp",
          "/futbol-sala/StColoma/StColoma-22.webp",
          "/futbol-sala/StColoma/StColoma-15.webp",
        ],
      },

      {
        titulo: "Maristas Sant Joan",

        imagenes: [
          "/futbol-sala/St-Andreu/StAndreu-09.webp",
          "/futbol-sala/Poblenou/P9-06.jpg",
          "/futbol-sala/Martinenc/Martinenc-05.jpg",
          "/futbol-sala/Kotska/Kotska-02.webp",
        ],
      }

    ],
  }

];



// =========================
// REVEAL COMPONENT
// =========================

function RevealSection({
  children,
  className = ""
}) {

  const [ref, visible] = useReveal();


  return (

    <div

      ref={ref}

      className={`
        ${className}
        ${visible ? "show" : ""}
      `}

    >

      {children}

    </div>

  );

}



// =========================
// COMPONENT
// =========================

function Galeria() {


  const [
    headerRef,
    headerVisible

  ] = useReveal();



  return (

    <>


      <section
        id="galeria"
        className="galeria-page"
      >


        <div className="galeria-container">



          {/* HEADER */}

          <div

            ref={headerRef}

            className={`
              gallery-header
              ${headerVisible ? "show" : ""}
            `}

          >

            <h1>
              Galería
            </h1>


            <p className="galeria-subtitle">

              Explora algunos de mis proyectos fotográficos

            </p>


          </div>


           <div className="galeria-footer">
            <PortfolioCTA variant="compact"/>
          </div>

          <br/>
          <br/>

          {/* CATEGORIAS */}


          {
            gallerySections.map((section)=>(


              <RevealSection

                key={section.categoria}

                className="gallery-category"

              >


                <h2>

                  {section.categoria}

                </h2>





                {
                  section.sesiones.map((sesion)=>(


                    <RevealSection

                      key={sesion.titulo}

                      className="gallery-session"

                    >


                      <h3>

                        {sesion.titulo}

                      </h3>





                      <div className="gallery-grid">


                        {
                          sesion.imagenes.map(
                            (img,index)=>(


                              <div

                                key={index}

                                className="gallery-item"

                              >

                                <img

                                  src={img}

                                  alt={sesion.titulo}

                                  loading="lazy"

                                />

                              </div>


                            )
                          )
                        }


                      </div>



                    </RevealSection>


                  ))
                }

              </RevealSection>

            ))
          }
          
        </div>
      </section>
    </>

  );

}



export default Galeria;
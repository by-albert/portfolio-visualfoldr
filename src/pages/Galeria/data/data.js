// IMPORTS DE IMÁGENES
// ------------------------------ Imágenes de Futbol Sala ------------------------------ 
// VALLSECA


// VINCIT
import vincit01 from '../../../assets/futbol-sala/Vincit/Vincit-01.jpg';
import vincit02 from '../../../assets/futbol-sala/Vincit/Vincit-02.jpg';
import vincit03 from '../../../assets/futbol-sala/Vincit/Vincit-03.jpg';
import vincit04 from '../../../assets/futbol-sala/Vincit/Vincit-04.jpg';
import vincit05 from '../../../assets/futbol-sala/Vincit/Vincit-05.jpg';
import vincit06 from '../../../assets/futbol-sala/Vincit/Vincit-06.jpg';
import vincit07 from '../../../assets/futbol-sala/Vincit/Vincit-07.jpg';
import vincit08 from '../../../assets/futbol-sala/Vincit/Vincit-08.jpg';
import vincit09 from '../../../assets/futbol-sala/Vincit/Vincit-09.jpg';
import vincit10 from '../../../assets/futbol-sala/Vincit/Vincit-10.jpg';

// ------------------------------ Imágenes de Skate ------------------------------ 
import skate from '../../../assets/skate/sk8-01.jpg';

// ------------------------------ Imágenes de Experimental ------------------------------ 
import flor from '../../../assets/experimental/flor.jpg';
import gaviota from '../../../assets/experimental/gaviota.jpg';

// ------------------------------ Imágenes de Fondo ------------------------------ 
import foto2 from '../../../assets/backgrounds/foto-2.jpg';
import foto4 from '../../../assets/backgrounds/foto-4.jpg';

export const albumsData = {
  'futbol-sala': {
    nombre: 'Fútbol Sala',

    sesiones: [
      {
        id: 'sant-joan-vs-vincit',
        titulo: 'Sant Joan vs Vincit',
        fecha: '25/01/2026',
        portada: vincit01,

        imagenes: [
          vincit01,
          vincit02,
          vincit03,
          vincit04,
          vincit05,
          vincit06,
          vincit07,
          vincit08,
          vincit09,
          vincit10,
        ]
      },

      {
        id: 'sant-joan-vs-martinenc',
        titulo: 'Sant Joan vs Martinenc',
        fecha: '14/05/2026',
        portada: foto2,

        imagenes: [
          foto2,
          foto4,
          vincit01
        ]
      }
    ]
  },

  conciertos: {
    nombre: 'Conciertos',

    sesiones: [
      {
        id: 'we-dance-band',
        titulo: 'WE DANCE BAND',
        fecha: '2026',
        portada: foto2,

        imagenes: [
          foto2
        ]
      }
    ]
  },

  skate: {
    nombre: 'Skate',

    sesiones: [
      {
        id: 'skate-session-1',
        titulo: 'Skate Session',
        fecha: '2026',
        portada: skate,

        imagenes: [
          skate
        ]
      }
    ]
  },

  experimental: {
    nombre: 'Experimental',

    sesiones: [
      {
        id: 'creative-1',
        titulo: 'Exploración creativa',
        fecha: '2026',
        portada: gaviota,

        imagenes: [
          flor,
          gaviota
        ]
      }
    ]
  }
};
// IMPORTS DE IMÁGENES
import futbolsala from '../../../assets/futbol-sala/Vincit-01.jpg';
import skate from '../../../assets/skate/sk8-01.jpg';
import flor from '../../../assets/experimental/flor.jpg';
import gaviota from '../../../assets/experimental/gaviota.jpg';

import foto2 from '../../../assets/backgrounds/foto-2.jpg';
import foto4 from '../../../assets/backgrounds/foto-4.jpg';

export const albumsData = {
  'futbol-sala': {
    nombre: 'Fútbol Sala',

    sesiones: [
      {
        id: 'sant-joan-vs-martinenc',
        titulo: 'Sant Joan vs Martinenc',
        fecha: '07/05/2026',
        portada: futbolsala,

        imagenes: [
          futbolsala,
          foto2,
          foto4
        ]
      },

      {
        id: 'hospitalet-vs-barcelona',
        titulo: 'Hospitalet vs Barcelona',
        fecha: '14/05/2026',
        portada: foto2,

        imagenes: [
          foto2,
          foto4
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
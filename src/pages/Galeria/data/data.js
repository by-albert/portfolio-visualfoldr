// IMPORTS DE IMÁGENES
import futbolsala from '../../../assets/albums/Vincit-01.jpg';
import skate from '../../../assets/albums/sk8-01.jpg';
import flor from '../../../assets/albums/flor.jpg';

import foto2 from '../../../assets/backgrounds/foto-2.jpg';
import foto4 from '../../../assets/backgrounds/foto-4.jpg';

/*
  ESTRUCTURA:
  Galería
    └── Álbum (categoría)
          └── Sesión (partido/evento)
                └── Fotos
*/

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
        portada: flor,

        imagenes: [
          flor
        ]
      }
    ]
  }
};
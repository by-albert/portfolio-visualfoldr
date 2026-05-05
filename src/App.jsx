import React from 'react';
import './App.scss';

import NewPortfolio from './components/NewPortfolio/NewPortfolio.jsx';
import Presentacion from './components/NewPortfolio/Presentacion/Presentacion.jsx';
import Contacto from './components/NewPortfolio/Contacto/Contacto.jsx';

function App() {
  return (
    <div className="app">
      <NewPortfolio />
      <Presentacion />
      <Contacto />
    </div>
  );
}

export default App;
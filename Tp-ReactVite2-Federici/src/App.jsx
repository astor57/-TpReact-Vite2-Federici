import React from 'react';
import './App.css';
import Form from './assets/componentes/formulario';
import Cita from './assets/componentes/cita';

function App() {
  return (
  <div>
    <h1>ADMINISTRADOR DE PACIENTES</h1>
    <div className="contenedor-flex">
      <div className="columna">
      <h2>CREAR MI CITA</h2>
        <Form />
      </div>
      <div className="columna">
      <h2>ADMINISTRA TUS CITAS</h2>
        <Cita />
      </div>
    </div>
  </div>
);
}

export default App;
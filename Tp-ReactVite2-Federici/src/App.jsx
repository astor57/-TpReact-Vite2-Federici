import React, {useState} from 'react';
import './App.css';
import Form from './assets/componentes/formulario';
import Cita from './assets/componentes/cita';

function App() {

  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  return (
  <div>
    <h1>ADMINISTRADOR DE PACIENTES</h1>
    <div className="contenedor-flex">
      <div className="columna">
      <h2>CREAR MI CITA</h2>
        <Form agregarCita={agregarCita}/>
      </div>
      <div className="columna">
      <h2>ADMINISTRA TUS CITAS</h2>
      {citas.map((cita) => (
      <Cita
        key={cita.id}
        datos={cita}
        eliminarCita={(id) => {
          setCitas(citas.filter((c) => c.id !== id));
        }}
          />
       ))}
      </div>
    </div>
  </div>
);
}

export default App;
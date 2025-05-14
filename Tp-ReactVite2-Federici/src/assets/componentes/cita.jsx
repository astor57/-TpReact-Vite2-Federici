import React from "react";
import './citas.css';

function Cita({ datos, eliminarCita }) {
  const { id, mascota, dueño, fecha, hora, sintomas } = datos;

  return (
    <div className="container">
      <div className="card">
        <p><strong>Mascota:</strong> {mascota}</p>
        <p><strong>Dueño:</strong> {dueño}</p>
        <p><strong>Fecha:</strong> {fecha}</p>
        <p><strong>Hora:</strong> {hora}</p>
        <p><strong>Síntomas:</strong> {sintomas}</p>
        <input
          type="button"
          value="ELIMINAR ×"
          onClick={() => eliminarCita(id)}
        />
      </div>
    </div>
  );
}

export default Cita;

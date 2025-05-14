import React from "react";
import './citas.css';

function Citas() {
  return (
    <>
      <div className="container">
        <div className="card">
          <p><strong>Mascota:</strong> Nina</p>
          <p><strong>Dueño:</strong> Martin</p>
          <p><strong>Fecha:</strong> 2021-08-05</p>
          <p><strong>Hora:</strong> 08:20</p>
          <p><strong>Síntomas:</strong> Le duele la pierna</p>
          <input type="button" value="ELIMINAR ×" />
        </div>
      </div>

      <div className="container">
        <div className="card">
          <p><strong>Mascota:</strong> Sifon</p>
          <p><strong>Dueño:</strong> Flecha</p>
          <p><strong>Fecha:</strong> 2023-08-05</p>
          <p><strong>Hora:</strong> 09:24</p>
          <p><strong>Síntomas:</strong> Duerme mucho</p>
          <input type="button" value="ELIMINAR ×" />
        </div>
      </div>

      <div className="container">
        <div className="card">
          <p><strong>Mascota:</strong> Floki</p>
          <p><strong>Dueño:</strong> Ari</p>
          <p><strong>Fecha:</strong> 2023-08-05</p>
          <p><strong>Hora:</strong> 16:15</p>
          <p><strong>Síntomas:</strong> No está comiendo</p>
          <input type="button" value="ELIMINAR ×" />
        </div>
      </div>
    </>
  );
}

export default Citas;
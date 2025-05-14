import React, { useState } from "react";
import './form.css';

function Formulario({agregarCita}) {
    const [mascota, setMascota] = useState('');
    const [dueño, setDueño] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    const verCambios = (e) => {
        e.preventDefault();

        // Validar
        if (mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        // Crear objeto de cita
        const nuevaCita = {
            id: Date.now(), mascota, dueño, fecha, hora, sintomas
        };

        // Pasar cita a App
        agregarCita(nuevaCita);
    };

    return (
        <div>
            {error && <div className="error">Todos los campos son obligatorios</div>}
            <form onSubmit={verCambios}>
                <label>Nombre Mascota</label>
                <input type="text" className="u-full-width" placeholder="Nombre Mascota" value={mascota} onChange={(e) => setMascota(e.target.value)}/>

                <label>Nombre Dueño</label>
                <input type="text" className="u-full-width" placeholder="Nombre dueño" value={dueño} onChange={(e) => setDueño(e.target.value)}/>

                <label>Fecha</label>
                <input type="date" className="u-full-width" value={fecha} onChange={(e) => setFecha(e.target.value)}/>

                <label>Hora</label>
                <input type="time" className="u-full-width" value={hora} onChange={(e) => setHora(e.target.value)}/>

                <label>Síntomas</label>
                <textarea className="u-full-width" value={sintomas} onChange={(e) => setSintomas(e.target.value)}/>

                <button type="submit" className="u-full-width button-primary">
                    Agregar Cita
                </button>
            </form>
        </div>
    );
}

export default Formulario;

import React, {useState} from "react";
import './form.css';

function Formulario(){ //Ver presentacion Pasando datos
    const [ingreso, setIngreso]=useState=('');

    const verCambios = (x) =>{
        setIngreso(x.target.value);
    }

    return(
        <div>
        <form>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value="" onChange={verCambios}/>
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value=""/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" value=""/>
            <label>hora</label>
            <input type="time" name="hora" className="u-full-width" value=""/>
            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width">
            </textarea>
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
        </div>
        
    )
}
export default Formulario
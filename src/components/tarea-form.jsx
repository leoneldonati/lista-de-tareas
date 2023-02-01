import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/tarea-form.css";

const Form = (props) => {
  const [tarea, setTarea] = useState("");

  const manejarCambio = (e) => {
    setTarea(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: tarea,
      completada: false,
    };

    props.onSubmit(tareaNueva);
  };

  return (
    <form className="Tarea-form" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="Tarea-input"
        placeholder="Ingrese su tarea"
        name="texto"
        onChange={manejarCambio}
        autoFocus
      />

      <button className="Tarea-boton">Agregar</button>
    </form>
  );
};

export default Form;

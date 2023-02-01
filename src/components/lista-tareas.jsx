import React, { useState } from "react";
import Form from "./tarea-form";
import Input from "./input-tarea";
import "../styles/lista-tareas.css";

const List = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareaActualizada = [tarea, ...tareas];
      setTareas(tareaActualizada);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id == id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <Form onSubmit={agregarTarea} />
      <div className="Lista-container">
        {tareas.map((tareas) => (
          <Input
            texto={tareas.texto}
            completada={tareas.completada}
            key={tareas.id}
            id={tareas.id}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
};

export default List;

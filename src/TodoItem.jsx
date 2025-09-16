import { TrashIcon } from "@heroicons/react/24/solid";

export default function TodoItem({ tarea, eliminarTarea, editarTarea }) {
  const editar = () => {
    const nuevoTitulo = prompt("Nuevo título:", tarea.titulo) || tarea.titulo;
    const nuevaDescripcion =
      prompt("Nueva descripción:", tarea.descripcion) || tarea.descripcion;
    const nuevaPrioridad =
      prompt("Nueva prioridad (baja, media, alta):", tarea.prioridad) ||
      tarea.prioridad;
    const nuevoEstado =
      prompt("Nuevo estado (pendiente, en_progreso, completada):", tarea.estado) ||
      tarea.estado;

    editarTarea(tarea.id, nuevoTitulo, nuevaDescripcion, nuevaPrioridad, nuevoEstado);
  };

  return (
    <div className="flex flex-col gap-2 border-b border-gray-300 p-3 shadow-sm rounded">
      <div className="flex justify-between items-center">
        <span className={tarea.estado === "completada" ? "line-through" : "text-gray-800"}>
          {tarea.titulo}
        </span>
      </div>

      <p className="text-sm text-gray-500">{tarea.descripcion}</p>
      <p className="text-sm font-semibold">Prioridad: {tarea.prioridad}</p>
      <p className="text-sm font-semibold">Estado: {tarea.estado}</p>

      <div className="flex gap-2">
        <button onClick={editar} className="text-blue-500">✏️ Editar</button>
        <button onClick={() => eliminarTarea(tarea.id)}>
          <TrashIcon className="w-5 h-5 text-red-500" />
        </button>
      </div>
    </div>
  );
}

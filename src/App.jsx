// import { useState, useEffect } from "react";
// import { login, register, getTasks, createTask } from "./services/api.js";

// function App() {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [tasks, setTasks] = useState([]);
//   const [form, setForm] = useState({ correo: "", contraseña: "" });
//   const [newTask, setNewTask] = useState({ text: "", descripcion: "", complejidad: "baja" });

//   // Si ya hay token → cargar tareas
//   useEffect(() => {
//     if (token) {
//       getTasks(token).then(setTasks);
//     }
//   }, [token]);

//   const handleLogin = async () => {
//     try {
//       const data = await login(form);
//       if (data.token) {
//         setToken(data.token);
//         setUser(data.user);
//         localStorage.setItem("token", data.token);
//         getTasks(data.token).then(setTasks);
//       } else {
//         alert(data.error || "Error al iniciar sesión");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert("Error en la conexión o las credenciales.");
//     }
//   };

//   const handleRegister = async () => {
//     try {
//       const data = await register({ nombre: "Prueba", ...form });
//       alert(data.message || data.error);
//     } catch (error) {
//       console.error("Registration failed:", error);
//       alert("Error al intentar registrar el usuario.");
//     }
//   };

//   const handleAddTask = async () => {
//     try {
//       const task = await createTask(newTask, token);
//       setTasks([...tasks, task]);
//       setNewTask({ text: "", descripcion: "", complejidad: "baja" });
//     } catch (error) {
//       console.error("Add task failed:", error);
//       alert("Error al crear la tarea.");
//     }
//   };

//   if (!token) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
//           <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>
//           <div className="flex flex-col gap-4">
//             <input
//               type="email"
//               placeholder="Correo"
//               className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
//               value={form.correo}
//               onChange={(e) => setForm({ ...form, correo: e.target.value })}
//             />
//             <input
//               type="password"
//               placeholder="Contraseña"
//               className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
//               value={form.contraseña}
//               onChange={(e) => setForm({ ...form, contraseña: e.target.value })}
//             />
//             <div className="flex gap-2 mt-4">
//               <button
//                 onClick={handleLogin}
//                 className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Iniciar Sesión
//               </button>
//               <button
//                 onClick={handleRegister}
//                 className="flex-1 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors"
//               >
//                 Registrarse
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//         <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Bienvenido {user?.nombre}</h1>
//         <button
//           onClick={() => { localStorage.clear(); setToken(""); }}
//           className="w-full px-4 py-2 mb-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
//         >
//           Cerrar Sesión
//         </button>

//         <h2 className="text-xl font-semibold mb-4 text-gray-700">Mis Tareas</h2>
//         <ul className="space-y-4 mb-6">
//           {tasks.map((t) => (
//             <li
//               key={t._id}
//               className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
//             >
//               <p className="font-medium text-gray-800">{t.text}</p>
//               <p className="text-sm text-gray-600">Descripción: {t.descripcion}</p>
//               <p className="text-sm font-semibold text-gray-500">Complejidad: {t.complejidad}</p>
//             </li>
//           ))}
//         </ul>

//         <h2 className="text-xl font-semibold mb-4 text-gray-700">Agregar Tarea</h2>
//         <div className="flex flex-col gap-4">
//           <input
//             placeholder="Texto"
//             className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={newTask.text}
//             onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
//           />
//           <input
//             placeholder="Descripción"
//             className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={newTask.descripcion}
//             onChange={(e) => setNewTask({ ...newTask, descripcion: e.target.value })}
//           />
//           <select
//             value={newTask.complejidad}
//             onChange={(e) => setNewTask({ ...newTask, complejidad: e.target.value })}
//             className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="baja">Baja</option>
//             <option value="media">Media</option>
//             <option value="alta">Alta</option>
//           </select>
//           <button
//             onClick={handleAddTask}
//             className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
//           >
//             Guardar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import TodoItem from "./TodoItem";
import { useState } from "react";

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("media");
  const [estado, setEstado] = useState("pendiente");
  const [filtroPrioridad, setFiltroPrioridad] = useState("todas");
  const [filtroEstado, setFiltroEstado] = useState("todas");

  const agregarTarea = () => {
    if (titulo.trim()) {
      setTareas([
        ...tareas,
        {
          id: Date.now(),
          titulo: titulo.trim(),
          descripcion: descripcion.trim(),
          prioridad,
          estado,
        },
      ]);
      setTitulo("");
      setDescripcion("");
      setPrioridad("media");
      setEstado("pendiente");
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const editarTarea = (id, nuevoTitulo, nuevaDescripcion, nuevaPrioridad, nuevoEstado) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id
          ? {
              ...tarea,
              titulo: nuevoTitulo,
              descripcion: nuevaDescripcion,
              prioridad: nuevaPrioridad,
              estado: nuevoEstado,
            }
          : tarea
      )
    );
  };

  // Filtro de tareas por prioridad y estado
  const tareasFiltradas = tareas.filter((t) => {
    const matchPrioridad = filtroPrioridad === "todas" || t.prioridad === filtroPrioridad;
    const matchEstado = filtroEstado === "todas" || t.estado === filtroEstado;
    return matchPrioridad && matchEstado;
  });

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 rounded shadow">
      <h1 className="text-3xl font-bold mb-5 text-center">LISTA DE TAREAS</h1>

      {/* Formulario de nueva tarea */}
      <div className="flex flex-col gap-2 mb-5">
        <input
          className="p-2 border rounded"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título de la tarea"
        />
        <textarea
          className="p-2 border rounded"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción de la tarea"
        />
        <select
          className="p-2 border rounded"
          value={prioridad}
          onChange={(e) => setPrioridad(e.target.value)}
        >
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
        <select
          className="p-2 border rounded"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="pendiente">Pendiente</option>
          <option value="en_progreso">En Progreso</option>
          <option value="completada">Completada</option>
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={agregarTarea}
        >
          Añadir Tarea
        </button>
      </div>

      {/* Filtros */}
      <div className="mb-4 flex flex-col gap-3">
        <div className="flex gap-3 justify-between">
          <label>Filtrar por prioridad:</label>
          <select
            className="p-2 border rounded"
            value={filtroPrioridad}
            onChange={(e) => setFiltroPrioridad(e.target.value)}
          >
            <option value="todas">Todas</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>
        <div className="flex gap-3 justify-between">
          <label>Filtrar por estado:</label>
          <select
            className="p-2 border rounded"
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
          >
            <option value="todas">Todas</option>
            <option value="pendiente">Pendiente</option>
            <option value="en_progreso">En Progreso</option>
            <option value="completada">Completada</option>
          </select>
        </div>
      </div>

      {/* Lista de tareas */}
      <div className="space-y-2">
        {tareasFiltradas.map((tarea) => (
          <TodoItem
            key={tarea.id}
            tarea={tarea}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
          />
        ))}
      </div>
    </div>
  );
}
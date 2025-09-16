const API_URL = "http://localhost:5000";

// Registro
export const register = (data) =>
  fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

// Login
export const login = (data) =>
  fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

// Obtener tareas
export const getTasks = (token) =>
  fetch(`${API_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json());

// Crear tarea
export const createTask = (task, token) =>
  fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());

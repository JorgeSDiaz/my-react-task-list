import Header from "./components/header/Header";
import TaskList from "./components/taskList/TaskList";
import { useState } from "react";

export default function App() {
  const data = [
    { id: 1, tittle: "Buscar la ropa en la lavanderia 🧥" },
    { id: 2, tittle: "Comprar los ingredientes para la cena 🥦" },
    { id: 3, tittle: "Llamar a mi mamá 📞" },
    { id: 4, tittle: "Hacer la tarea de matemáticas 📝" },
  ];

  const [tasks, setTasks] = useState(data);

  const handleEdit = (task) => {
    let newTittle = prompt("Editando tarea");
    let check = confirm("¿Estás seguro de editar la tarea?");
    if (check && newTittle !== "") {
      setTasks(
        tasks.map((item) =>
          item.id === task.id ? { ...item, tittle: newTittle } : item
        )
      );
    }
  }

  const handleDelete = (id) => {
    let check = confirm("¿Estás seguro de eliminar la tarea?");
    if (check) {
      setTasks(
        tasks.filter((item) => item.id !== id)
      );
    }
  }

  return (
    <>
      <Header appTittle={"My Task List"} />
      <TaskList tasks={tasks} onDelet={handleDelete} onEdit={handleEdit}/>
    </>
  );
}

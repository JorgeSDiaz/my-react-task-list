import Task from "../task/Task";
import { useEffect, useState } from "react";

export default function TaskList({ data }) {
  const [tasks, setTasks] = useState(data);

  const defineLocalStorage = (storageData) => {
    localStorage.setItem("tasks", JSON.stringify(storageData));
  };

  const handleEdit = (task) => {
    let tasksCopy = [...tasks];

    let newTittle = prompt("Editando tarea");
    if (newTittle !== "" && newTittle !== null) {
      tasksCopy.map((item) => {
        if (item.id === task.id) {
          item.tittle = newTittle;
        }
      });

      setTasks(tasksCopy);
      defineLocalStorage(tasksCopy);
    }
  }

  const handleDelete = (id) => {
    let tasksCopy = [...tasks];

    let check = confirm("¿Estás seguro de eliminar la tarea?");
    if (check) {
      tasksCopy = tasksCopy.filter((task) => task.id !== id);
    }
    setTasks(tasksCopy);
    defineLocalStorage(tasksCopy);
  }

  const handlecompleted = (id) => {
    let tasksCopy = [...tasks];

    tasksCopy.map((item) => {
      if (item.id === id) {
        item.completed = item.completed ? 0 : 1;
      }
    });

    setTasks(tasksCopy);
    defineLocalStorage(tasksCopy);
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("tasks");
    setTasks(JSON.parse(localStorageData) || data);
  }, []);

  return (
    <div className="grid gap-y-5">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onEdit={handleEdit} onDelete={handleDelete} onCompleted={handlecompleted}/>
      ))}
    </div>
  );
}

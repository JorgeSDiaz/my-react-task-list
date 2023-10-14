import { useState, useEffect } from "react";

export function useTask() {
  const data = [
    {
      id: 1,
      tittle: "Buscar la ropa en la lavanderia 🧥",
      completed: 0,
      description: "test",
    },
    {
      id: 2,
      tittle: "Comprar los ingredientes para la cena 🥦",
      completed: 0,
      description: "lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      tittle: "Llamar a mi mamá 📞",
      completed: 0,
    },
    {
      id: 4,
      tittle: "Hacer la tarea de matemáticas 📝",
      completed: 0,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum d dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];

  const [tasks, setTasks] = useState(data);
  const [nextIndex, setNextIndex] = useState(data.length + 1);

  const defineLocalStorage = (storageData) => {
    localStorage.setItem("tasks", JSON.stringify(storageData));
  };

  const editTask = (task) => {
    let tasksCopy = [...tasks];

    let newTittle = prompt("new Tittle");
    let newDescription = prompt("new Description");
    if (newTittle !== "" && newTittle !== null) {
      tasksCopy.map((item) => {
        if (item.id === task.id) {
          item.tittle = newTittle;
          (item.description !== "" && item.description !== null) && (item.description = newDescription);
        }
      });

      setTasks(tasksCopy);
      defineLocalStorage(tasksCopy);
    }
  };

  const deleteTask = (id) => {
    let tasksCopy = [...tasks];

    let check = confirm("¿Estás seguro de eliminar la tarea?");
    if (check) {
      tasksCopy = tasksCopy.filter((task) => task.id !== id);
    }
    setTasks(tasksCopy);
    defineLocalStorage(tasksCopy);
  };

  const addTask = (task) => {
    let tasksCopy = [...tasks];
    task.id = nextIndex;
    setNextIndex(nextIndex + 1);
    task.completed = 0;
    tasksCopy.push(task);
    setTasks(tasksCopy);
    defineLocalStorage(tasksCopy);
  };

  const completedTask = (id) => {
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

  return [tasks, editTask, deleteTask, addTask, completedTask];
}

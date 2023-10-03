import { useState, useEffect } from "react";

export function useTask() {
    const data = [
        { id: 1, tittle: "Buscar la ropa en la lavanderia 🧥", completed: 0 },
        { id: 2, tittle: "Comprar los ingredientes para la cena 🥦", completed: 0 },
        { id: 3, tittle: "Llamar a mi mamá 📞" },
        { id: 4, tittle: "Hacer la tarea de matemáticas 📝", completed: 0 },
      ];

    const [tasks, setTasks] = useState(data);
    const [nextIndex, setNextIndex] = useState(data.length + 1);

    const defineLocalStorage = (storageData) => {
      localStorage.setItem("tasks", JSON.stringify(storageData));
    };
  
    const editTask = (task) => {
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
  
    const deleteTask = (id) => {
      let tasksCopy = [...tasks];
  
      let check = confirm("¿Estás seguro de eliminar la tarea?");
      if (check) {
        tasksCopy = tasksCopy.filter((task) => task.id !== id);
      }
      setTasks(tasksCopy);
      defineLocalStorage(tasksCopy);
    }
    
    const addTask = (task) => {
        let tasksCopy = [...tasks];
        task.id = nextIndex;
        setNextIndex(nextIndex + 1);
        tasksCopy.push(task);
        setTasks(tasksCopy);
        defineLocalStorage(tasksCopy);
    }
  
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

    return [tasks, editTask, deleteTask, addTask, completedTask]
}
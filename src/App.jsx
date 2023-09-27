import Header from "./components/header/Header";
import TaskList from "./components/taskList/TaskList";

export default function App() {
  const data = [
    { id: 1, tittle: "Buscar la ropa en la lavanderia 🧥", completed: 0 },
    { id: 2, tittle: "Comprar los ingredientes para la cena 🥦", completed: 0 },
    { id: 3, tittle: "Llamar a mi mamá 📞" },
    { id: 4, tittle: "Hacer la tarea de matemáticas 📝", completed: 0 },
  ];

  return (
    <div className="flex-col justify-items-center justify-center p-5">
      <Header appTittle={"My Task List"} />
      <TaskList data={data} />
    </div>
  );
}

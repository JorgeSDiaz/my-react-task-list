import Header from "./components/header/Header";
import Task from "./components/task/Task";

export default function App() {
  return (
    <>
      <Header appTittle={"My Task List"} />
      <Task tittle={"Buscar la ropa en la lavanderia 🧥"}/>
    </>
  );
}

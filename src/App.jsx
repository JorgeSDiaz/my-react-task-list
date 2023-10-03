import Header from "./components/header/Header";
import TaskList from "./components/taskList/TaskList";

export default function App() {
  return (
    <div className="flex-col justify-items-center justify-center p-5">
      <Header appTittle={"My Task List"} />
      <TaskList />
    </div>
  );
}

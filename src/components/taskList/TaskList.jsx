import { useTask } from "../../hooks/useTask";
import Task from "../task/Task";

export default function TaskList({ data }) {
  const [tasks, editTask, deleteTask, completedTask] = useTask(data);

  function handleEdit(task) {
    editTask(task);
  }

  function handleDelete(task) {
    deleteTask(task);
  }

  function handlecompleted(task) {
    completedTask(task);
  }

  return (
    <div className="grid gap-y-5">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onEdit={handleEdit} onDelete={handleDelete} onCompleted={handlecompleted}/>
      ))}
    </div>
  );
}

import { useTask } from "../../hooks/useTask";
import TaskForm from "../taskForm/TaskForm";
import Task from "../task/Task";

export default function TaskList() {
  const [tasks, editTask, deleteTask, addTask, completedTask] = useTask();

  function handleEdit(task) {
    editTask(task);
  }

  function handleDelete(task) {
    deleteTask(task);
  }

  function handlecompleted(task) {
    completedTask(task);
  }

  function handleAddTask(task) {
    addTask(task);
  }

  return (
    <div className="grid gap-y-5">
      <TaskForm onAddTask={handleAddTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onCompleted={handlecompleted}
        />
      ))}
    </div>
  );
}

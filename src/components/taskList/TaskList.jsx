import Task from "../task/Task";

export default function TaskList({ tasks, onEdit, onDelet }) {
  return (
    <div className="grid gap-y-5">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelet} />
      ))}
    </div>
  );
}

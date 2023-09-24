import Task from "../task/Task";

export default function TaskList({ tasks, onEdit, onDelet }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelet} />
        ))}
      </ul>
    </>
  );
}
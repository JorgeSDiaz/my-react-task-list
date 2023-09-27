
export default function Task({ task, onEdit, onDelete, onCompleted }) {
  const handleEdit = () => {
    onEdit(task);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handlecompleted = () => {
    onCompleted(task.id);
  };

  return (
    <div className="grid grid-flow-col p-5 bg-gray-100">
      <input
        type="checkbox"
        completed={task.completed}
        onChange={handlecompleted}
        className="w-7 h-7 appearance-none border-double border-4 border-gray-400 rounded-full checked:bg-lime-300 checked:border-transparent checked:border-green-800 p-1 my-1"
      />
      <div className="p-auto m-auto px-4">
        <h2 className={task.completed ? "text-red-500 line-through" : null}>
          {task.tittle}
        </h2>
      </div>
      <div className="p-auto m-auto flex space-x-4">
        <button
          className="bg-green-300 rounded-full text-lg font-semibold hover:bg-green-400 px-3 py-1 w-auto"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button className="bg-red-300 rounded-full text-lg font-semibold hover:bg-red-400 px-3 py-1 w-auto" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function Task({ task, onEdit, onDelete }) {
  const [checked, setChecked] = useState(false);

  const handleEdit = () => {
    onEdit(task);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div className="grid grid-flow-col p-5 bg-gray-100">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChecked}
        className="w-7 h-7 appearance-none border-double border-4 border-gray-400 rounded-full checked:bg-lime-300 checked:border-transparent checked:border-green-600 p-1 my-1"
      />
      <div className="p-auto m-auto px-4">
        <h2 className={checked ? "text-red-500 line-through" : null}>
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

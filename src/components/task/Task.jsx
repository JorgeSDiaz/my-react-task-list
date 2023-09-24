import { useState } from "react";

export default function Task({ task, onEdit, onDelete }) {
  const [checked, setChecked] = useState(false);

  const handleEdit = () => {
    onEdit(task);
  };

  const handleDelete = () => {
    onDelete(task.id);
  }

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleChecked} />
      <h2 style={{ textDecoration: checked ? "line-through" : null }}>
        {task.tittle}
      </h2>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

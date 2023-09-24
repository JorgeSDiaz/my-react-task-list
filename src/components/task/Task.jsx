import { useState } from "react";

export default function Task({ tittle, handleEdit, handleDelete }) {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  }

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleChecked}/>
      <h2 style={{textDecoration: checked ? 'line-through': null}}>{tittle}</h2>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

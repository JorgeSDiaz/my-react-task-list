import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [tittle, setTittle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!tittle) {
      alert("Please add a task");
      return;
    }
    onAddTask({ tittle });
    setTittle("");
  }

  return (
    <div className="grid grid-flow-col p-5 bg-gray-200 rounded-lg my-2">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-y-3">
          <input
            type="text"
            placeholder="Write a Task"
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
            className="w-auto px-3 py-2 rounded-full text-lg font-semibold bg-white-100"
          />
          <button
            type="submit"
            className="bg-cyan-300 rounded-full text-lg font-bold hover:bg-blue-400 px-3 py-2 w-auto"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

import { useForm } from "react-hook-form";

export default function TaskForm({ onAddTask }) {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset
  } = useForm();

  function onSubmit(data) {
    onAddTask(data);
    reset();
  }

  const chargeTrigger = () => {
    trigger("tittle");
  }

  return (
    <div className="grid grid-flow-col p-5 bg-gray-200 rounded-lg my-2">
      <form onSubmit={handleSubmit(onSubmit)} onChange={chargeTrigger}>
        <div className="grid grid-cols-1 gap-y-3">
          <input
            type="text"
            placeholder="Write a Task"
            className="w-auto px-3 py-2 rounded-full text-lg font-semibold bg-white-100"
            {...register("tittle", {
              required: {
                value: true,
                message: "Tittle is required",
              },
              minLength: {
                value: 3,
                message: "Min length is 3",
              },
            })}
          />
          {errors.tittle && (
            <span className="text-red-500 text-sm">
              {errors.tittle.message}
            </span>
          )}
          <textarea
            placeholder="Description"
            className="w-auto px-3 py-2 rounded-lg text-lg font-semibold bg-white-100"
            {...register("description")}
          ></textarea>
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

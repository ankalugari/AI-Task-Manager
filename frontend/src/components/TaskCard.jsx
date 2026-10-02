import { useTasks } from "../context/TaskContext";

function TaskCard({ task, onEdit }) {
  const { deleteTask } = useTasks();

  function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      deleteTask(task.id);
    }
  }

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">

      {/* Top Section */}
      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {task.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {task.description}
          </p>
        </div>

        {/* Priority */}
        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
          {task.priority}
        </span>

      </div>

      {/* Task Information */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">

        <span className="rounded-md bg-gray-100 px-3 py-1 text-gray-600">
          📂 {task.category}
        </span>

        <span className="rounded-md bg-gray-100 px-3 py-1 text-gray-600">
          📅 {task.dueDate}
        </span>

        <span className="rounded-md bg-blue-100 px-3 py-1 text-blue-600">
          {task.status}
        </span>

      </div>

      {/* Buttons */}
      <div className="mt-5 flex justify-end gap-3 border-t pt-4">

        <button
          onClick={() => onEdit(task)}
          className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;
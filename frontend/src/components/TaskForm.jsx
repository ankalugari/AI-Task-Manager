import { useState } from "react";

function TaskForm({ onCreateTask, onUpdateTask, editTask }) {
  const [title, setTitle] = useState(
    editTask ? editTask.title : ""
  );

  const [description, setDescription] = useState(
    editTask ? editTask.description : ""
  );

  const [priority, setPriority] = useState(
    editTask ? editTask.priority : "Medium"
  );

  const [category, setCategory] = useState(
    editTask ? editTask.category : "Development"
  );

  const [status, setStatus] = useState(
    editTask ? editTask.status : "Pending"
  );

  const [dueDate, setDueDate] = useState(
    editTask ? editTask.dueDate : ""
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (title === "") {
      alert("Please enter task title");
      return;
    }

    if (editTask) {
      const updatedTask = {
        id: editTask.id,
        title: title,
        description: description,
        priority: priority,
        category: category,
        status: status,
        dueDate: dueDate,
      };

      onUpdateTask(updatedTask);

    } else {
      const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        priority: priority,
        category: category,
        status: status,
        dueDate: dueDate,
      };

      onCreateTask(newTask);
    }
  }

  return (
    <div>

      <h2 className="text-2xl font-bold text-gray-800">
        {editTask ? "Edit Task" : "Create New Task"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-5 space-y-4"
      >

        {/* Title */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Task Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            rows="4"
            className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Priority and Category */}
        <div className="grid gap-4 md:grid-cols-2">

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Priority
            </label>

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
            >
              <option value="Development">Development</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Database">Database</option>
              <option value="Testing">Testing</option>
            </select>
          </div>

        </div>

        {/* Status and Due Date */}
        <div className="grid gap-4 md:grid-cols-2">

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Due Date
            </label>

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          {editTask ? "Update Task" : "Create Task"}
        </button>

      </form>

    </div>
  );
}

export default TaskForm;
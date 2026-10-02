import { useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import Modal from "../components/Modal";
import { useTasks } from "../context/TaskContext";

function Tasks() {
  const { tasks, addTask, updateTask } = useTasks();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");

  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  function handleCreateTask(newTask) {
    addTask(newTask);
    setShowModal(false);
  }

  function handleEditTask(task) {
    setEditTask(task);
    setShowModal(true);
  }

  function handleUpdateTask(updatedTask) {
    updateTask(updatedTask);
    setEditTask(null);
    setShowModal(false);
  }

  function handleCloseModal() {
    setShowModal(false);
    setEditTask(null);
  }

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || task.status === status;

    const matchesPriority =
      priority === "All" || task.priority === priority;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority
    );
  });

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Tasks
          </h1>

          <p className="mt-1 text-gray-500">
            Manage all your tasks in one place.
          </p>
        </div>

        <button
          onClick={() => {
            setEditTask(null);
            setShowModal(true);
          }}
          className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          + Create Task
        </button>

      </div>

      {/* Filters */}
      <div className="mt-6 grid gap-4 rounded-xl border bg-white p-4 md:grid-cols-3">

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
        >
          <option value="All">All Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

      </div>

      {/* Count */}
      <div className="mt-6">
        <p className="text-sm text-gray-500">
          Showing {filteredTasks.length} of {tasks.length} tasks
        </p>
      </div>

      {/* Tasks */}
      <div className="mt-4 space-y-4">

        {filteredTasks.length > 0 ? (

          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleEditTask}
            />
          ))

        ) : (

          <div className="rounded-xl border bg-white p-10 text-center">

            <p className="text-gray-500">
              No tasks found.
            </p>

          </div>

        )}

      </div>

      {/* Modal */}
      {showModal && (
        <Modal onClose={handleCloseModal}>

          <TaskForm
            onCreateTask={handleCreateTask}
            onUpdateTask={handleUpdateTask}
            editTask={editTask}
          />

        </Modal>
      )}

    </div>
  );
}

export default Tasks;
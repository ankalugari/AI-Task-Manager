import { useState } from "react";
import DashboardCard from "../components/DashboardCard";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import Modal from "../components/Modal";
import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const { tasks, addTask, updateTask } = useTasks();

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

  return (
    <div className="p-6">

      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Good Morning, Niharika 👋
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your tasks and stay productive.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <DashboardCard
          title="Total Tasks"
          value={tasks.length}
          icon="📋"
        />

        <DashboardCard
          title="Completed"
          value={
            tasks.filter(
              (task) => task.status === "Completed"
            ).length
          }
          icon="✅"
        />

        <DashboardCard
          title="Pending"
          value={
            tasks.filter(
              (task) => task.status === "Pending"
            ).length
          }
          icon="⏳"
        />

        <DashboardCard
          title="High Priority"
          value={
            tasks.filter(
              (task) => task.priority === "High"
            ).length
          }
          icon="⚠️"
        />

      </div>

      {/* Tasks */}
      <div className="mt-8">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-gray-800">
            Today's Tasks
          </h2>

          <button
            onClick={() => {
              setEditTask(null);
              setShowModal(true);
            }}
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            + Create Task
          </button>

        </div>

        <div className="mt-5 space-y-4">

          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleEditTask}
            />
          ))}

        </div>

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

export default Dashboard;
import { useState } from "react";
import Modal from "../components/Modal";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "AI Task Manager",
      description: "Build an AI-powered task management application.",
      status: "In Progress",
      tasks: 12,
    },
    {
      id: 2,
      name: "Food Delivery App",
      description: "Develop a full-stack online food delivery application.",
      status: "Completed",
      tasks: 20,
    },
    {
      id: 3,
      name: "Portfolio Website",
      description: "Create a personal developer portfolio.",
      status: "Pending",
      tasks: 8,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  function handleCreateProject(e) {
    e.preventDefault();

    if (name === "") {
      alert("Please enter project name");
      return;
    }

    const newProject = {
      id: Date.now(),
      name: name,
      description: description,
      status: status,
      tasks: 0,
    };

    setProjects([...projects, newProject]);

    setName("");
    setDescription("");
    setStatus("Pending");

    setShowModal(false);
  }

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Projects
          </h1>

          <p className="mt-1 text-gray-500">
            Manage your projects and track progress.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
        >
          + Create Project
        </button>

      </div>

      {/* Projects */}
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >

            <h2 className="text-xl font-bold text-gray-800">
              {project.name}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {project.description}
            </p>

            <div className="mt-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                {project.status}
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between border-t pt-4">

              <span className="text-sm text-gray-500">
                Total Tasks
              </span>

              <span className="font-bold text-gray-800">
                {project.tasks}
              </span>

            </div>

            <button className="mt-4 w-full rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              View Project
            </button>

          </div>
        ))}

      </div>

      {/* Create Project Modal */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>

          <h2 className="text-2xl font-bold text-gray-800">
            Create New Project
          </h2>

          <form
            onSubmit={handleCreateProject}
            className="mt-5 space-y-4"
          >

            {/* Project Name */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Project Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter project name"
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
                placeholder="Enter project description"
                rows="4"
                className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {/* Status */}
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

            {/* Button */}
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
            >
              Create Project
            </button>

          </form>

        </Modal>
      )}

    </div>
  );
}

export default Projects;
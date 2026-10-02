import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="min-h-[calc(100vh-4rem)] w-64 border-r bg-white p-4">

      <div className="space-y-2">

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block rounded-lg px-4 py-3 font-medium ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          🏠 Dashboard
        </NavLink>

        {/* Tasks */}
        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `block rounded-lg px-4 py-3 font-medium ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          📋 Tasks
        </NavLink>

        {/* Projects */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `block rounded-lg px-4 py-3 font-medium ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          📁 Projects
        </NavLink>

        {/* AI Assistant */}
        <button className="w-full rounded-lg px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-100">
          🤖 AI Assistant
        </button>

        {/* Settings */}
        <button className="w-full rounded-lg px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-100">
          ⚙️ Settings
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;
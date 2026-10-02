function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between border-b bg-white px-6">

      {/* Logo */}
      <div>
        <h1 className="text-xl font-bold text-blue-600">
          AI Task Manager
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="text-xl text-gray-600 hover:text-blue-600">
          🔔
        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            N
          </div>

          <span className="font-medium text-gray-700">
            Niharika
          </span>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
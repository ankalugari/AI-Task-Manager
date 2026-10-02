import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Layout from "./components/Layout";
import TaskProvider from "./context/TaskContext";

function App() {
  return (
    <BrowserRouter>

      <TaskProvider>

        <Routes>

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/*"
            element={
              <Layout>
                <Routes>

                  <Route path="/" element={<Dashboard />} />

                  <Route path="/dashboard" element={<Dashboard />} />

                  <Route path="/tasks" element={<Tasks />} />

                  <Route path="/projects" element={<Projects />} />

                </Routes>
              </Layout>
            }
          />

        </Routes>

      </TaskProvider>

    </BrowserRouter>
  );
}

export default App;
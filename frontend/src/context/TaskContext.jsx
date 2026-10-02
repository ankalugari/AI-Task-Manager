import { createContext, useContext, useState } from "react";
import tasksData from "../data/tasks";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(tasksData);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function updateTask(updatedTask) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

export default TaskProvider;
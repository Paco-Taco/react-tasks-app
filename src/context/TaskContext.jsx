import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react"; // Import createContext from react to use its function
import { tasks as data } from "../data/tasks.js"; // Rename tasks to data to avoid conflicts

// Export to use in other components
export const TaskContext = createContext();

// Export to use in main.jsx
export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  //   Values assignement to "tasks" useState when the component runs for the 1st time
  useEffect(() => {
    setTasks(data);
  }, []);

  // createTask function statement
  function createTask(task) {
    // update via setState function
    setTasks([
      // ... =  include all of task's elements
      ...tasks,
      // add task's props
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  // deleteTask function statement
  function deleteTask(taskId) {
    // discriminate from tasks the element that matches with taskId
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    // give Provider all of the previous stuff
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {/* All of the context's children will be able to access that stuff */}
      {children}
    </TaskContext.Provider>
  );
}

// PROP-TYPES
TaskContextProvider.propTypes = {
  children: PropTypes.element,
};

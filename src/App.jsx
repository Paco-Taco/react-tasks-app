import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { tasks as data } from "./tasks.js";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  //   Values assignement to "tasks" useState when the component runs for the 1st time
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle) {
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      description: "new task"
    }])
  }
  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;

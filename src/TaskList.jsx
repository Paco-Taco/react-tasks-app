import { tasks as data } from "./tasks.js";
import { useState, useEffect } from "react";

// TaskList function that will go over all the array elements and display them
function TaskList() {
    
  const [tasks, setTasks] = useState([]);

//   Values assignement to "tasks" useState when the component runs for the 1st time
  useEffect(() => {
    setTasks(data)
  }, [])

//   No tasks handling
  if (tasks.length === 0) {
    return <h1>There are no tasks yet..</h1>;
  }

// Return all of the tasks that are stored in js file
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

// TaskList function that will go over all the array elements and display them
function TaskList() {
  const { tasks } = useContext(TaskContext);
  //   No tasks handling
  if (tasks.length === 0) {
    return <h1>There are no tasks yet..</h1>;
  }

  // Return all of the tasks that are stored in js file
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );

}


export default TaskList;

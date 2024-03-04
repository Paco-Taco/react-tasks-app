import PropTypes from "prop-types";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  // Add deleteTask component to every card
  const { deleteTask } = useContext(TaskContext);

  // Render task
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Delete task</button>
    </div>
  );
}

// PROP-TYPES
TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskCard;

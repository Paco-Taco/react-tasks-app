import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { TaskContext } from "../context/TaskContext"; // Import context to access data

// Form component
function TaskForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext); // Import createTask directly from context

  // I think this one is very descriptive
  const handleSubmit = (e) => {
    e.preventDefault();
    // Using an object as argument 
    createTask({
      title,
      description,
    });
    // Reset state values to avoid stacking
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your task title"
        // change title's state every time the user types
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="Write your task's description"
        // change description's state every time the user types
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

// PROP-TYPES
TaskForm.propTypes = {
  createTask: PropTypes.func,
};

export default TaskForm;

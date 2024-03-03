import { useState } from "react";
import PropTypes from "prop-types";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  // const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your task"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Guardar</button>
    </form>
  );
}

TaskForm.propTypes = {
  createTask: PropTypes.func,
};

export default TaskForm;

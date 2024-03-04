import { useState } from "react";
import PropTypes from "prop-types";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ 
        title, 
        description
    });
    setTitle("")
    setDescription("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your task title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea name="description" id="description" cols="30" rows="10" placeholder="Write your task's description"
      onChange={(e) => { setDescription(e.target.value) }}
      value={description}>
      </textarea>
      <button>Save</button>
    </form>
  );
}

TaskForm.propTypes = {
  createTask: PropTypes.func,
};

export default TaskForm;

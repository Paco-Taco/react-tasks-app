import PropTypes from 'prop-types'

function TaskCard({ task, deleteTask }) {
  
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
    deleteTask: PropTypes.func
}

export default TaskCard;

import PropTypes from 'prop-types'


function TaskCard({ task }) {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
}

// PROP-TYPES
TaskCard.propTypes = {
    task: PropTypes.object.isRequired
}

export default TaskCard;

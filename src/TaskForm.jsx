import {useState} from 'react'

function TaskForm() {
    const [title, setTitle] = useState('')
    // const [task, setTask] = useState('')

    const handleSubmit = (e) => {
        console.log(title)
        e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Write your task" 
      onChange={(e) =>{
        setTitle(e.target.value)
      }} />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;

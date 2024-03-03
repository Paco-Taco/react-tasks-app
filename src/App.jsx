import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { tasks as data } from "./tasks.js";
import {useState, useEffect} from 'react'

function App() {
  const [tasks, setTasks] = useState([]);

  //   Values assignement to "tasks" useState when the component runs for the 1st time
    useEffect(() => {
      setTasks(data)
    }, [])
  
  return (
    <>
      <TaskForm />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App

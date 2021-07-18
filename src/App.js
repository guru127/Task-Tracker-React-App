import { useState } from 'react'
import Header from "./component/Header";
import Task from './component/Task';
import Tasks from "./component/Tasks";
import AddTask from './component/AddTask';


const App =()=> {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
  {
      id: 1,
      text: "Appointment",
      day: "jan 1st 2020 at 1:20pm",
      reminder: true,
  },
  {
      id: 2,
      text: "meeting",
      day: "jan 2nd 2020 at 1:20pm",
      reminder: true,
  },
  {
      id: 3,
      text: "shopping",
      day: "jan 3rd 2020 at 1:20pm",
      reminder: false,
  },
])

// add task
const addTask =(task) =>{
 // console.log(task);
 const id = Math.floor(Math.random() * 10000)+1
  
 const newTask = {id, ...task}
 setTasks([...tasks, newTask])
}

//delete task
const deleteTask = (id) =>{
 setTasks(tasks.filter((task) => task.id!==id))
}
 
//toggle reminder
 const toggleReminder = (id) =>{
   setTasks(
     tasks.map((task) => task.id === id
    ? {...task, reminder : !task.reminder} : task)
   )
 }

  return (
    <div className="container">

     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

     { showAddTask && <AddTask onAdd = { addTask } />}
     {tasks.length>0? (<Tasks tasks={tasks} onDelete = {deleteTask} 
     onToggle={toggleReminder} />):('No Tasks To Show')}
   
   </div>
  )
}

export default App;

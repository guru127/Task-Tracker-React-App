import { useState } from 'react'
import Header from "./component/Header";
import Tasks from "./component/Tasks";


const App =()=> {
  
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
//delete task
const deleteTask = (id) =>{
 setTasks(tasks.filter((task) => task.id!==id))
}
  return (
    <div className="container">
     <Header />
     {tasks.length>0? <Tasks tasks={tasks}
      onDelete = {deleteTask}/>:'No Tasks To Show'}
    </div>
  )
}

export default App;

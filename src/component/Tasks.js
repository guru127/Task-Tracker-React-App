import { useState } from 'react'

const Tasks = () => {
    const [tasks,setTasks] = useState([
        {
            id: 1,
            text: "doc apmnt",
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
        }
    ])
    return (
        <>
          {tasks.map((task) => (<h3 key = { task.id}>{task.text}</h3>)) }  
        </>
    )
}

export default Tasks

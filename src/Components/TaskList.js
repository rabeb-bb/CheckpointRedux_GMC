import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const TaskList = () => {
    const tasks = useSelector(state => state.taskReducer.tasks)
    return (
        <div>
            {tasks.map((el)=><Task task={el}/>)}
            
        </div>
    )
}

export default TaskList

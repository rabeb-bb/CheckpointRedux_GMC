import { ADD_TASK, TASK_DEL, TASK_DONE } from "../constants/task"

export const addTask=(newTask)=>{
    return{
        type:ADD_TASK,
        payload:newTask,
    }
}
export const deleteTask=(task)=>{
    return{
        type:TASK_DEL,
        payload:task,
    }
}
export const completeTask=(task)=>{
    return{
        type:TASK_DONE,
        payload:task,
    }
}
import { ADD_TASK, TASK_DEL, TASK_DONE } from "../constants/task";

//initialState
const initialState ={
    tasks:[]
}

//reducer function
const taskReducer=(state=initialState, action)=>{
    const task=action.payload
    switch (action.type) {
        case ADD_TASK:
            
            return { tasks: [...state.tasks, action.payload] };
        case TASK_DEL:
            return {tasks:[...state.tasks.filter((el)=>el.id!==action.payload)]}
        case TASK_DONE:
            return{tasks:[...state.tasks.filter((el,i)=>i!==action.payload)]}

        default:
            return state
    }
}

//export
export default taskReducer
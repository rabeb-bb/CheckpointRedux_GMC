import { INCREMENT } from '../constants/count';
// initial state
const initialState= {
    count:0,
}
//reducer


const countReducer = (state=initialState, action) => {
  
 switch (action.type) {
     case INCREMENT: return {
         count: state.count+1
     }
                
    default:
     return state;
                
    }
}

export default countReducer

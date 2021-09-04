import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../JS/actions/count'

const Counter = () => {
    const count = useSelector(state => state.countReducer.count)
    const dispatch=useDispatch()
    return (
        <div>
            <h1>This is your count</h1>
            <h2>{count}</h2>
        <button onClick={()=> dispatch(increment())}>+</button>
            
        </div>
    )
}

export default Counter

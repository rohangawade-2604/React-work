import React, { useContext } from 'react'
import { CountContext } from '../context/counter'

const Count = () => {
    const ContextBtn = useContext(CountContext);
    return (
        <>
            <div className='counter'>
            <button onClick={()=>ContextBtn.setCount(ContextBtn.count+1)}>Increment</button>
            <button onClick={()=>ContextBtn.setCount(ContextBtn.count-1)}>Decrement</button>
            </div>
        </>
    )
}

export default Count

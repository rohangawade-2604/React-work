import React, { useReducer } from 'react'
import { Reducer } from './Reducer';
import { Decrement, Increment, Reset } from './Action';

export const Counter = () => {

    const InitialState = { count: 0 };

    // after the upper concept now to the action page 

    const [state, dispatch] = useReducer(Reducer, InitialState)  //main syntax of useReducer and in useReducer parameter , where Reducer should be same as the file name


    return (
        <>
            <h1>count is : {state.count}</h1>  

            {/* state = count which is 0 */}
            <button
                onClick={() => {
                    dispatch(Increment);        //dispatch the action part from the action page as increment , decrement and reset
                }}> + </button>

            <button
                disabled = {state.count === 0}
                onClick={() => {
                    dispatch(Decrement)
                }}> - </button>

            <button 
            onClick={() => {
                dispatch(Reset)
            }}>Reset</button>

            {/* after this step just know the concept of the syntax where we need to build the logic part....  (reference part) */}

            {/* after the step just go to reducer page and build the logic using switch statement.... */}
        </>
    )
}



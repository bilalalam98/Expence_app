import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child = (props) =>{
    let [state, dispatch] = useReducer(CounterReducer , 5)
    console.log(state)
    return(
        <div>
            <h2>This is first child</h2>
            <h4>Counter reducer value is {state}</h4>
            <button onClick={()=>dispatch('INCREMENT')}>increment counterReducer</button>
            <button onClick={()=>dispatch('DECREMENT')}>decrement counterReducer</button>
        </div>
    )
}

export default Child;

// Hooks: useState

// useState(initial) returns [state, setState]

// initial -> Starting point or Value
// state -> Current State of the variable
// setState -> How to change the state

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Count: {count}</h1>
            <button style={{padding: "10px", margin: "10px", background: "green"}} onClick={() => setCount(count - 1)}>-1</button>
            <button style={{padding: "10px", margin: "10px", background: "red"}} onClick={() => setCount(0)}>Reset</button>
            <button style={{padding: "10px", margin: "10px", background: "darkblue"}} onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )   
}

export default Counter;
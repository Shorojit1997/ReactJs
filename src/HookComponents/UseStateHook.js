import React, { useState } from 'react';

const UseStateHook = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        for(let i=0;i<10;i++)
           setCount(prevState=>prevState + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} >Value: {count}</button>

        </div>
    );
}

export default UseStateHook;
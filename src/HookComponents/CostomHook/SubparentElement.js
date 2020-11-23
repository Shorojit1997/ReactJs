import React from 'react';
import useCounter from './useCounter'

const SubparentElement = () => {
    const[value,increment,decrement]=useCounter();
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            
        </div>
    );
};

export default SubparentElement;
import React, { useState,useCallback,useEffect } from 'react';
import Button from './Button';

const ParentComp = () => {
    const [id,setId]=useState(0);
    const [counter,setCounter]=useState(0)
    const incrementId=useCallback(()=>{
        setId(id+1);
    },[id])
    const incrementCounter=useCallback(()=>{
        setCounter(counter+1);
    },[counter])

    return (
        <div>
            <h1>id: {id}</h1>
            <h2>Counter: {counter}</h2>
            <Button text="ID" increment={incrementId} />
            <Button text="Counter" increment={incrementCounter}/>
            
        </div>
    );
};

export default ParentComp;
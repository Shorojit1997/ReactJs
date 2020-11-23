import React,{useState} from 'react';

const useCounter = (value=null) => {

    const [counter,setCounter]=useState(value)
    const increment=()=>{
        setCounter(counter+1);
    }
    const decrement=()=>{
        setCounter(counter-1);
    }
    return [counter,increment,decrement];

    
};

export default useCounter;
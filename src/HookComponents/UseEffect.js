import React,{useState,useEffect} from 'react';

const UseEffect = () => {
    const [x,setX]=useState(0);
    const[y,setY]=useState(0)
    const LogMouseMove=(e)=>{

        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect( ()=>{
        console.log("run effect")
        window.addEventListener('mousemove',LogMouseMove)
        return()=>{
            window.removeEventListener('mousemove',LogMouseMove)
        }
    },[]);
    return (
        <div>
            <h1>X - {x} Y - {y}</h1>
            
        </div>
    );
};

export default UseEffect;
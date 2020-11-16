import React, { useState } from 'react';
const HookObject=()=>{
    const [person,setProperty]=useState({
        name:"",
        id:""
    }
    )
    const changeName=(e)=>{
        setProperty({...person,name:e.target.value})

    }
    const changeId=(e)=>{
        setProperty({...person,id:e.target.value})

    }
    
    return ( 
        <div>
            <form className="mt-3">
                <input type="text"  onChange={changeName}  placeholder="Enter your name..."></input>
                <input type="text" onChange={changeId} placeholder="Enter your id..."/>
            </form>
            <h1>Name: {person.name}</h1><br></br>
            <h1>Id:{person.id}</h1>            
        </div>
    );
}

export default HookObject;

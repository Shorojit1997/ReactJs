
import React,{useState} from 'react';

const HookArray = () => {
    const [contact,setContact]=useState([]);
    const [entry,setEntry]=useState(null);
    const submitHandeler=()=>{
        setContact([...contact,{
            id:contact.length,
            name:entry
        }])

    }
    const onSet=(e)=>{
        
        setEntry(e.target.value);
    }
    return (
        <div>
            <form>
                <input onChange={onSet} name="name" type="text" placeholder="Enter your name..."/><br></br>
                
            </form>
            <button onClick={submitHandeler} >Added Contact</button><br></br>

            <ul>
                {
                    contact.map(list=>{
                        return<li key={list.id}>Name: {list.name}  </li>
                    })
                }
            </ul>

            
        </div>
    );
};

export default HookArray;
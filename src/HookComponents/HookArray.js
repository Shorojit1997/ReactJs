
import React,{useState} from 'react';

const HookArray = () => {
    const [contact,setContact]=useState([])
    const submitHandeler=(e)=>{
        setContact([...contact,{
            id:contact.length,
            name:e.target.value,

        }])

    }
    return (
        <div>
            <form>
                <input name="name" type="text" placeholder="Enter your name..."/><br></br>
                <input onClick={submitHandeler} type="submit" value="Added Contact"></input><br></br>
            </form>
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
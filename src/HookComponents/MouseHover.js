import React, { useState } from 'react';
import UseEffect from './UseEffect';

const MouseHover = () => {
    const[on,setOn]=useState(true);
    const updateToggle=()=>
    {
        setOn(!on)
    }
    return (
        <div>

            <button onClick={updateToggle}>Toggle</button>
            {on && <UseEffect/>}
            
        </div>
    );
};

export default MouseHover;
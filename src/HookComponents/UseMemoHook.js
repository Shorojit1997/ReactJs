import React, { useMemo, useState } from 'react';

const UseMemoHook = () => {
    const [one,setOne]=useState(0);
    const[two,setTwo]=useState(0);
    const OneHandeler=()=>{
        setOne(one+1);
    }
    const twoHandeler=()=>{
        setTwo(two+1)
    }
    const isEven=useMemo(()=>
    {
        let n=0;
        for(;n<2000000000;n++){}

        if(one%2==0)
          return true;
    },[one])

    return (
        <div>
            <button onClick={OneHandeler}>IdOne {one}</button><br></br>
             <span>{isEven? "Even" : "Odd"}</span><br></br>

            <button onClick={twoHandeler}>IdTwo {two}</button>
            
        </div>
    );
};

export default UseMemoHook;
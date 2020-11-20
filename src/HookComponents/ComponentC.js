import React,{useContext} from 'react';
import {SendUserId,SendUserName} from './UserContestUsingReactJs'

const ComponentC = () => {
    const username=useContext(SendUserName);
    const userid  =useContext(SendUserId);
    return (
        <div>
            <h1>Name:{username} <br></br> Id: {userid} </h1>
            
        </div>
    );
};

export default ComponentC;
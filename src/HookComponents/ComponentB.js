import React from 'react';
import ComponentC from './ComponentC';
import {SendUserId, SendUserName} from './UserContestUsingReactJs'

const ComponentB = () => {
    return (
        <div>
            <ComponentC/>
            <SendUserName.Consumer >
                {
                    username=>{
                        return (
                            <SendUserId.Consumer>
                                {
                                    userid=>{
                                        return( <h1>Name: {username} <br></br> Student ID: {userid} </h1>)
                                    }
                                }

                            </SendUserId.Consumer>
                        )
                    }
                }
            </SendUserName.Consumer>
            
        </div>
    );
};

export default ComponentB;
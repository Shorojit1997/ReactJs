import React from 'react';
import ComponentA from './ComponentA';

export const SendUserName=React.createContext();
export const SendUserId=React.createContext();

const UserContestUsingReactJs = () => {
    return (
        <div>
            <SendUserName.Provider value={"Sagor"}>
                <SendUserId.Provider value={"16CSE067"}>
                <ComponentA/>
                </SendUserId.Provider>
            </SendUserName.Provider>

        </div>
    );
};

export default UserContestUsingReactJs;
import React, { Component } from 'react';

class List extends Component {


    
   
    render() {
       
        const person=["Tea","Coffee","Water","Juice"]
        const dataItem=person.map((num)=>{
            return <li>{num}</li>
        })
        return (
            <div>
                {dataItem}
                <h3>Yes</h3>
            </div>
        );
    }
}

export default List;
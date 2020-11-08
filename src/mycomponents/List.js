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
    
            </div>
        );
    }
}

export default List;
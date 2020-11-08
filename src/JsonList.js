import React, { Component } from 'react';

class JsonList extends Component {
    render() {
        const person=[

            {name:"Sagor" , city:"Chuadanga"},
            {name:"Bisnu" , city:"Dinajpur"},
            {name:"Bonna" , city:"Satkhira"}

        ]
        const personName=person.map((dataname)=>{
            return <option>{dataname.name}</option>
        });
        const personCity=person.map((dataname)=>{
            return <option>{dataname.city}</option>
        });
        return (
            <div>
                <select>
                {personName}
                </select>
                <select>
                {personCity}
                </select>
                
            </div>
        );
    }
}

export default JsonList;
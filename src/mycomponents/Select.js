import React, { Component } from 'react';
//this is comment section for this code and also commited
class Select extends Component {
    constructor()
    {
        super()
        this.state={
            dhaka:"Dhaka",
            khulna:"Khulna",
            rangpur:"Rangpur",
            barisal:"Barisal",
            select_city:"Dhaka"
        }
    }
    onchangeHandeler=(event)=>{
        this.setState({select_city:event.target.value})

    }
    render() {
        return (
            <div>
                <p>{this.state.select_city}</p>
                <select onChange={this.onchangeHandeler} value={this.state.select_city}>
                    <option>{this.state.dhaka}</option>
                    <option>{this.state.khulna}</option>
                    <option>{this.state.rangpur}</option>
                    <option>{this.state.barisal}</option>

                </select>
                
            </div>
        );
    }
}

export default Select;
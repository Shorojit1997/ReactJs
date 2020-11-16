import React, { Component } from 'react';

class ContactMake extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
        }
     
    }

    render() {
     
        const value=this.state.name;
        return (
            <div>
                <form>
                    <input onChange={(e)=>this.setState({name:e.target.value})} type="text" placeholder="Enter your name..." /><br></br>
                </form>
                <h1>{value}</h1>
               
            </div>
        );
    }
}

export default ContactMake;
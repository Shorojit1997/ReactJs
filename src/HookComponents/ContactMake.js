import React, { Component } from 'react';

class ContactMake extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
        }
        this.ob=null;
     
    }
    SetState=(e)=>{


    }

    render() {
     
        const element=this.state.name;
        return (
            
            <div>
                <form>
                    <input onChange={this.SetState} type="text" placeholder="Enter your name..." /><br></br>
                </form>
               
               
            </div>
        );
    }
}

export default ContactMake;
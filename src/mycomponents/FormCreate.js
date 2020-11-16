import React, { Component } from 'react';

class FormCreate extends Component {
    constructor(){
        super();
        this.state={
            username:""
        }
    }
    onchangehandeler=(event)=>{
      this.setState({[event.target.name]:event.target.value})

    }
   
    render() {
        return (
            <div>
                <form>
                    <p>{this.state.username}</p><br></br>
                    <input name="username" onChange={this.onchangehandeler} type="text" placeholder="Enter your name..." ></input><br></br>
                    <input type="button" value="Submit Now"></input>

                </form>
                
            </div>
        );
    }
}

export default FormCreate;
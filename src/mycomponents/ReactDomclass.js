import React, { Component } from 'react';
import ReactDom from 'react-dom'

class ReactDomclass extends Component {
    clickme(a)
    {
        var container=document.getElementById("myid");
        var elements=<h1>I am shorojit sarkar</h1>
        ReactDom.render(elements,container);
    }
    render() {
        return (
            <div>
                <button  onClick={this.clickme.bind("I am shorojitsarkar")}>Click me</button>
                <h1 id="myid">I am Sagor Sarkar</h1>
            </div>
        );
    }
}

export default ReactDomclass;
import React, { Component } from 'react';
import axios from 'axios'

class NewCountryList extends Component {
    constructor()
    {
        super()
        this.state={
            mydata:[]
        }
    }

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then((response)=>{
            this.setState({mydata:response.data})

        })
        .catch((error)=>{
            
        })

    }
    render() {
        const datalist=this.state.mydata.map((info)=>{
        return <li>{info.name} area is {info.area}</li>
        })
        return (
            <div>
                {datalist}
                
            </div>
        );
    }
}

export default NewCountryList;
import React, { Component } from 'react';
import axios from 'axios'

class CountryList extends Component {
    constructor(){
        super();
        this.state={
            mydata:[]
        }

    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then((response)=>{
           this.setState({mydata:response.data})

        })
        .catch(error=>{
           
        })
    }
    render() {
        const mylist=this.state.mydata;
        const countryName=mylist.map((contry)=>{
        return <li>{contry.name}</li>
        })

        return (
            <div>
                <ol>
                    {countryName}
                </ol>

                
            </div>
        );
    }
}

export default CountryList;
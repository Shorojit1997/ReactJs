import React from 'react';
import {BrowserRouter,  ReactRouter, Route, Switch} from 'react-router-dom'
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Nav from './Nav'


const ReactRouterModule = () => {
    
    return (
        <div>
            <BrowserRouter>

            <Nav/>

            <Switch>
            <Route exact path='/' component={Home}/>
               <Route path='/about' component={About}/>
               <Route path='/contact' component={Contact}/>
               <Route path='/portfolio' component={Portfolio}/>
            </Switch>
               
               
            
            </BrowserRouter>
            
            
        </div>
    );
};

export default ReactRouterModule;
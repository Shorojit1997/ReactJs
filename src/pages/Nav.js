import React from 'react';
import { NavLink } from 'react-router-dom'
const style={
    color:"#000"
  
}
const mg={
    padding:"20px"
}

const Nav = () => {
    const back={
        background:"#555",
        padding:"20px"
        
    }
    return (
        <div style={back}>
            <NavLink style={mg} activeStyle={style} exact to='/' >Home</NavLink>
            <NavLink style={mg}  activeStyle={style} to='/contact' >Contact</NavLink>
            <NavLink style={mg}  activeStyle={style} to='/about' >About</NavLink>
            <NavLink style={mg}  activeStyle={style} to='/portfolio' >Portfolio</NavLink>

        </div>
    );
};

export default Nav;
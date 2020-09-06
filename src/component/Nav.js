import React from 'react'
import {Link} from 'react-router-dom' 
function Nav() {
    const NavStyle={
        color:'white'
    }
    return (
        <nav>
            
            <ul className="nav-links">
                <Link to='/' style={NavStyle}> <h3> Home</h3></Link>
                <Link to='/about' style={NavStyle}> <li> About </li></Link>
                <Link to='/cocktails' style={NavStyle}> <li> CockTails  </li></Link>
            </ul>
            
        </nav>
    )
}

export default Nav

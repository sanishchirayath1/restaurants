import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar"> <Link to="/"> <span 
        id="title" 
        className="title" 
        >Foodie Spot </span></Link>
        <ul><Link to="/"> <li 
        >Home</li></Link></ul>
        </nav>
    )
}

export default Navbar
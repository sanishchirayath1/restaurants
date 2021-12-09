import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar"> <span 
        // onClick={() => setShowRestaurant(false)} 
        className="title" 
        ><Link to="/"> Foodie Spot </Link></span>
        <ul><Link to="/"> <li 
        // onClick={() => setShowRestaurant(false)}
        >Home</li></Link></ul>
        </nav>
    )
}

export default Navbar
import React from "react";
import {Link} from "react-router-dom"

function Card(props) {
  return (
    <Link to={`/restaurants/${props.id}`}>
      <div className="card" onClick={props.handleClick}>
        <img src="./assets/icon.svg" width="100px" alt=""/>
        <div className="card-info">
            <h2 className="card-info-title">{props.name}</h2>
            <div className="card-info-details">
               <div className="card-info-location">
                    <img src="./assets/pin.png"  alt="" />
                    <span className="neighborhood">{props.neighborhood}</span>
                </div>
                <p>{props.cuisine}</p>
            </div>     
        </div>
    </div>
    </Link>
    
  );
}

export default Card;
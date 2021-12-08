import React from "react";


function Info(props) {
  return (
    <div className="card" onClick={props.handleClick}>
        <img src="./assets/icon.svg" width="100px" alt=""/>
        <div className="card-info">
            <h2 className="card-info-title">{props.name}</h2>
            <div className="card-info-details">
               <div className="card-info-location">
                    <img src="./assets/pin.png" width="10px" alt="" />
                    <p>{props.neighborhood}</p>
                </div>
                <p>{props.cuisine}</p>
            </div>
            
        </div>
    </div>
  );
}

export default Info;
import React from "react";
import {Link} from "react-router-dom"


function Card(props) {
  return (
    <Link to={`/restaurants/${props.id}`}>
      <div className="card" onClick={props.handleClick}>
        <div className="card-image-container">
          <img src="./assets/food.jpg" className="card-image" alt=""/>
        </div>
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





// fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
//     .then(res => res.json())
//     .then(data => {
//         document.body.style.backgroundImage = `url(${data.urls.regular})`
// 		document.getElementById("author").textContent = `By: ${data.user.name}`
//     })
//     .catch(err => {
//         // Use a default background image/author
//         document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
// )`
// 		document.getElementById("author").textContent = `By: Dodi Achmad`
//     })
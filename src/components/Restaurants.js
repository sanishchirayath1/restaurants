import React from "react";
import data from "../data";
import Review from "./Review";



function Restaurants(props) {
    const dt = data.restaurants.filter(restaurant => restaurant.id === props.id)[0];
    const reviews = dt.reviews.map(review => <Review key={review} review={review} />);
    return (
        <div className="restaurant-page wrapper" >
            <h1>{dt.name} - <span className="decor-text">{dt.cuisine_type}</span></h1>
            <a href={`https://maps.google.com/?q=${dt.latlng.lat},${dt.latlng.lng}`}><img src="./assets/pin.png" width="10px" alt="" /> <span>{dt.neighborhood}</span></a>
            <span className="restaurant-page-address"> {dt.address} </span>
            <p> 
                Monday : {dt.operating_hours.Monday}
                <br />
                Tuesday : {dt.operating_hours.Tuesday}
                <br />
                Wednesday : {dt.operating_hours.Wednesday}
                <br />
                Thursday : {dt.operating_hours.Thursday}
                <br />
                Friday : {dt.operating_hours.Friday}   
                <br />
                Saturday : {dt.operating_hours.Saturday}
                <br />
                Sunday : {dt.operating_hours.Sunday}
            </p>
            {reviews}
        </div>
    );
}

export default Restaurants;


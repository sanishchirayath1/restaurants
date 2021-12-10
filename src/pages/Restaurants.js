import React from "react";
import data from "../data";
import Review from "../components/Review";
import {useParams} from "react-router-dom";


function Restaurants() {
    const {id} = useParams();
    const dt = data.restaurants.filter(restaurant => restaurant.id.toString() === id)[0];
    const reviews = dt.reviews.map(review => <Review key={review.comments} review={review} />);
    return (
        <div className="restaurant-page wrapper" >
            <h1>{dt.name} - <span className="decor-text">{dt.cuisine_type}</span></h1>
            <a href={`https://maps.google.com/?q=${dt.latlng.lat},${dt.latlng.lng}`}><img src="../assets/pin.png"  alt="" /> <span className="neighborhood">{dt.neighborhood}</span></a>
            <span className="restaurant-page-address"> {dt.address} </span>
            <p className="restaurant-page-timings"> 
                <span className="restaurant-page-timings-day">Monday</span> : {dt.operating_hours.Monday}
                <br />
                <span className="restaurant-page-timings-day">Tuesday</span> : {dt.operating_hours.Tuesday}
                <br />
                <span className="restaurant-page-timings-day">Wednesday</span> : {dt.operating_hours.Wednesday}
                <br />
                <span className="restaurant-page-timings-day">Thursday</span> : {dt.operating_hours.Thursday}
                <br />
                <span className="restaurant-page-timings-day">Friday</span> : {dt.operating_hours.Friday}   
                <br />
                <span className="restaurant-page-timings-day">Saturday</span> : {dt.operating_hours.Saturday}
                <br />
                <span className="restaurant-page-timings-day">Sunday</span> : {dt.operating_hours.Sunday}
            </p>
            {reviews}
        </div>
    );
}

export default Restaurants;


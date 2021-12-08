import React from "react";
import data from "../data";
import Review from "./Review";



function Restaurants() {
    const dt = data.restaurants[0];
    const reviews = dt.reviews.map(review => <Review key={review.id} review={review} />);
    return (
        <div className="restaurant-page" >
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


// "restaurants": [{
//     "id": 1,
//     "name": "Mission Chinese Food",
//     "neighborhood": "Manhattan",
//     "photograph": "1.jpg",
//     "address": "171 E Broadway, New York, NY 10002",
//     "latlng": {
//       "lat": 40.713829,
//       "lng": -73.989667
//     },
//     "cuisine_type": "Asian",
//     "operating_hours": {
//       "Monday": "5:30 pm - 11:00 pm",
//       "Tuesday": "5:30 pm - 12:00 am",
//       "Wednesday": "5:30 pm - 12:00 am",
//       "Thursday": "5:30 pm - 12:00 am",
//       "Friday": "5:30 pm - 12:00 am",
//       "Saturday": "12:00 pm - 4:00 pm, 5:30 pm - 12:00 am",
//       "Sunday": "12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm"
//     },
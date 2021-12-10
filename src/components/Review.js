import React from "react";


function Review(props) {
    const { review } = props;
    
    function stars() {
        let ratingStars = ""
        let rating = review.rating
        while(rating > 0) {
            ratingStars += "⭐"
            rating--
        }
        return ratingStars
    }

    return (
        <div className="restaurant-review">
            <div className="restaurant-review-header">
                <img src="../assets/profile.png" alt=""/>
                <h3> {review.name}</h3>
                </div>


            <div className="restaurant-review-stats">
                <span className="restaurant-review-rating">{review.rating} {stars()}</span>
                <span className="restaurant-review-date">
                Reviewed on {review.date}</span>
            </div>
         
    
            <p>{review.comments}</p>
        </div>
    );
}
export default Review;

// "name": "Steve",
//           "date": "October 26, 2016",
//           "rating": 4,
//           "comments": "Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank."
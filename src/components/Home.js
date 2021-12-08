import React from "react";
import data from "../data";
import Card from "./Card";
import Restaurants from "./Restaurants";

const restaurantsInfo = data.restaurants.map(restaurant => {
  return (
    <Card
      key={restaurant.id}
      name={restaurant.name}
      neighborhood={restaurant.neighborhood}
      cuisine={restaurant.cuisine_type}
    />
  )
})

function Home() {
  return (
    <div>
      <nav className="navbar"> <h1>Foodie Spot </h1></nav>
      <div className="container wrapper">
        <input type="text" className="search" />
        <Restaurants />

        <div className="restaurants">
        
          {restaurantsInfo}   
        </div>
      </div>
    </div>
  );
}

export default Home;
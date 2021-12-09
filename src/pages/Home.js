import React from "react";
import data from "../data";
import Card from "../components/Card";

function Home() {
  const restaurantsInfo = data.restaurants.map(restaurant => {
    return (
            <Card
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            neighborhood={restaurant.neighborhood}
            cuisine={restaurant.cuisine_type}
          />
    )
  })
  return (
      <div className="container wrapper">
        <input type="text" className="search" />
        {restaurantsInfo}    
      </div>
  );
}

export default Home;
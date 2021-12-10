import React from "react";
import data from "../data";
import Card from "../components/Card";
import Search from "../components/Search";



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
    <>
      <Search />
      <div className="container wrapper">
        {restaurantsInfo}    
      </div>
    </>
  );
}

export default Home;
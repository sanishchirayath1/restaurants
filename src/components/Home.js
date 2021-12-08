import React, {useState} from "react";
import data from "../data";
import Card from "./Card";
import Restaurants from "./Restaurants";



function Home() {
  const [restaurant, setRestaurant] = useState(1)
  const [showRestaurant, setShowRestaurant] = useState(false)

  function handleClick(id) {
  setRestaurant(id)
  setShowRestaurant(true)
  }
  const restaurantsInfo = data.restaurants.map(restaurant => {
    return (
      <Card
        key={restaurant.id}
        name={restaurant.name}
        neighborhood={restaurant.neighborhood}
        cuisine={restaurant.cuisine_type}
        handleClick={() => handleClick(restaurant.id)}
      />
    )
  })

  return (
    <div>
      <nav className="navbar"> <span onClick={() => setShowRestaurant(false)} className="title" >Foodie Spot </span>
      <ul> <li onClick={() => setShowRestaurant(false)}>Home</li> </ul>
      </nav>
      <div className="container wrapper">
        <input type="text" className="search" />
  
          {
          showRestaurant ?  
          <Restaurants id={restaurant}/>: 
          <div className="restaurants">
            {restaurantsInfo} 
            </div>
          }   
        
      </div>
    </div>
  );
}

export default Home;
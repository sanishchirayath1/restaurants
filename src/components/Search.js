import React, {useState} from "react";
import data from "../data";
import {Link} from "react-router-dom";



function Search() {
    const [place, setPlace] = useState("")
    const [coords, setCoords] = useState({
        lat:"",
        lng:""
    })
    const [overlayItems, setOverlayItems] = useState([])

    let placeCoords = {
        lat:10.5818,
        lng:76.0359
    }

    function handleChange(e) {

        const searchOverlay = document.getElementById("search-overlay");
        const search = document.getElementById("search")
        
        setPlace(e.target.value)

        if(e.target.value === "") {
            searchOverlay.classList.remove("active")
            search.classList.remove("search-active")     
        }else {
            searchOverlay.classList.add("active")
            search.classList.add("search-active")
        }

        let searchResults = data.restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(e.target.value.toLowerCase()))
        
        console.log(searchResults)
        let searchOverlayItems = searchResults.map(result => (<>
        <Link to={`/restaurants/${result.id}`}>
            <div className="search-overlay-items">
                <p>{result.name}</p>
            </div>    
        </Link>

        </>))

        setOverlayItems(searchOverlayItems)

        

        navigator.geolocation.getCurrentPosition(pos => {
            setCoords({
                lat:pos.coords.latitude,
                lng:pos.coords.longitude
            })   
        })


       }

    let haversine = require("haversine-distance");
    let haversineM = haversine(coords, placeCoords); //Results in meters (default)
    let haversineKm = haversineM /1000; //Results in kilometers

    
    return (
        <>
        <div className="searchbar">
            <input type="text" id="search" className="search" onChange={handleChange} value={place} autoComplete="off"/>
            <div id="search-overlay" className="search-overlay">{overlayItems}</div>
        </div>
        
        {place && (
                <div style={{color:"#fff"}} className="search-location-details">
                    <p>Your Latitude: {coords.lat}</p>
                    <p>Your Longitude: {coords.lng}</p>
                    <p>You are {haversineKm.toFixed(2)} KM away from Thrissur</p>
                </div>
            )}
        </>
    )
}

export default Search
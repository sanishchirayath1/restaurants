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


        let searchResults = data.restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(e.target.value.toLowerCase()))


        if(e.target.value === "") {
            searchOverlay.classList.remove("active")
            search.classList.remove("search-active")     
        }else {
            searchOverlay.classList.add("active")
            search.classList.add("search-active")
        }
        if(searchResults.length === 0 && coords.lat === "") {
            search.classList.remove("search-active")
        }
        
        

        let searchOverlayItems = searchResults.map(result => (<>
        <Link to={`/restaurants/${result.id}`}>
            <div className="search-overlay-items">
                <p>{result.name}</p>
            </div>    
        </Link>

        </>))

        setOverlayItems(searchOverlayItems)

        function errorCallback(e) {
            console.log("error")
            console.log(e)
        }
        navigator.geolocation.getCurrentPosition(pos => {
            setCoords({
                lat:pos.coords.latitude,
                lng:pos.coords.longitude
            })   
        }, errorCallback,{timeout:10000})

        console.log(coords)
       }

    let haversine = require("haversine-distance");
    let haversineM = haversine(coords, placeCoords); //Results in meters (default)
    let haversineKm = haversineM /1000; //Results in kilometers

    
    return (
        <>
        <div className="searchbar">
            <input type="text" id="search" className="search" onChange={handleChange} value={place} autoComplete="off"/>
            <div id="search-overlay" className="search-overlay">
                {coords.lat !== "" && (
                    <div className="search-location-details">
                        <span> Your Latitude: {coords.lat} </span>
                        <span> Your Longitude: {coords.lng} </span>
                        <span> You are {haversineKm.toFixed(2)} KM away from Thrissur</span>
                    </div>
                )}
                {overlayItems && overlayItems}
            </div>
        </div>
        </>
    )
}

export default Search
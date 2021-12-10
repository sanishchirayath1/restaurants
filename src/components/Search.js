import React, {useState} from "react";



function Search() {
    const [place, setPlace] = useState("")
    const [coords, setCoords] = useState({
        lat:"",
        lng:""
    })

    let placeCoords = {
        lat:10.5818,
        lng:76.0359
    }

    function handleChange(e) {

        setPlace(e.target.value)

        navigator.geolocation.getCurrentPosition(pos => {
            setCoords({
                lat:pos.coords.latitude,
                lng:pos.coords.longitude
            })   
            console.log(coords)
        })

       }

 
    console.log(placeCoords)
    console.log(coords)


    let haversine = require("haversine-distance");
    let haversineM = haversine(coords, placeCoords); //Results in meters (default)
    let haversineKm = haversineM /1000; //Results in kilometers

    console.log("distance (in meters): " + haversineM + "m");
    console.log("distance (in kilometers): " + haversineKm+ "km");

    
    return (
        <>
        <div className="searchbar">
            <input type="text" className="search" onChange={handleChange} value={place}/>
            <br/>
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
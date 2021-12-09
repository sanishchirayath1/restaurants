import React, {useState} from "react";



function Search() {
    const [place, setPlace] = useState("")
    const [coords, setCoords] = useState({
        lat:"",
        lng:""
    })

    function handleChange(e) {
        setPlace(e.target.value)
       }

    let placeCoords = {
        lat:10.523958,
        lng:76.212888
    }
    console.log(placeCoords)
    console.log(coords)


    function haversine(lat1, lon1, lat2, lon2)
    {
        // distance between latitudes
        // and longitudes
        let dLat = (lat2 - lat1) * Math.PI / 180.0;
        let dLon = (lon2 - lon1) * Math.PI / 180.0;
           
        // convert to radiansa
        lat1 = (lat1) * Math.PI / 180.0;
        lat2 = (lat2) * Math.PI / 180.0;
         
        // apply formulae
        let a = Math.pow(Math.sin(dLat / 2), 2) +
                   Math.pow(Math.sin(dLon / 2), 2) *
                   Math.cos(lat1) *
                   Math.cos(lat2);
        let rad = 6371;
        let c = 2 * Math.asin(Math.sqrt(a));
        return rad * c;
         
    }
     // Driver Code
     let lat1 = coords.lat;
     let lon1 = coords.lng;
     let lat2 = placeCoords.lat;
     let lon2 = placeCoords.lng;

     

    navigator.geolocation.getCurrentPosition(pos => {
        setCoords({
            lat:pos.coords.latitude,
            lng:pos.coords.longitude
        })   
        console.log(coords)
    })
    return (
        <>
        <div className="searchbar">
            <input type="text" className="search" onChange={handleChange} value={place}/>
            <br/>
        </div>
        {place && (
                <div style={{color:"#fff"}}>
                    <p>Your Latitude: {coords.lat}</p>
                    <p>Your Longitude: {coords.lng}</p>
                    <p>You are {haversine(lat1, lon1, lat2, lon2)} KM away from Thrissur</p>
                </div>
            )}
        </>
    )
}

export default Search
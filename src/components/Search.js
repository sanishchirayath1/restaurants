import React, {useState} from "react";



function Search() {
    const [place, setPlace] = useState("")
    const [coords, setCoords] = useState({
        latitude:"",
        longitude:""
    })

    function handleChange(e) {
        setPlace(e.target.value)
       }

       navigator.geolocation.getCurrentPosition(pos => {
           setCoords({
               latitude:pos.coords.latitude,
               longitude:pos.coords.longitude
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
                    <p>Your Latitude: {coords.latitude}</p>
                    <p>Your Longitude: {coords.longitude}</p>
                </div>
            )}
        </>
    )
}

export default Search
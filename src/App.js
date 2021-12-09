import React from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";


function App() {
    return (
        <> 
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}> </Route>      
                <Route path="/restaurants/:id" element={<Restaurants />} >
                </Route>      
            </Routes>
        </>
    )
}
export default App;
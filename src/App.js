import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import BeerList from "./Components/BeersList/BeerList";
import NewBeer from "./Components/NewBeer/NewBeer";
import RandomBeer from "./Components/RandomBeer/RandomBeer";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      

      <Routes>

      <Route path='/' element={< HomePage />} />
      <Route path='/beers' element={< BeerList />} />
        {/* <RandomBeer></RandomBeer>
        <NewBeer></NewBeer> */}
        
      </Routes>  
    </div>
  );
}

export default App;

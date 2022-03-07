 import React, { useState, useEffect} from 'react'; 
 import axios from 'axios'; 

function BeerList() {
const [beers, setBeers] = useState([]);

const fetchData = async () => {
  try {
    let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    
    let beersFromApi = response.data;
    console.log(beersFromApi)
    setBeers(beersFromApi);
  } catch (error) {
    console.log(error);
  }
}

 useEffect(() => {
  fetchData();
}, []); 


return (
    <div>
<h1> Beers </h1>
{beers.map((beer) => (
  <div>

    <img src={beer.image_url} alt='beer' />
    <h3>{beer.name}</h3>
    <h3>{beer.tagline}</h3>
  </div>
))}

    </div>
  )
}

export default BeerList;
import React from 'react'
import beersImage from '../../assets/beers.png'
import randomBeerImage from '../../assets/random-beer.png'
import newBeerImage from '../../assets/new-beer.png'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
     <Link to='/beers'>
     <img 
      src={beersImage}
      alt="beers"
      /> 
     </Link>


       <img 
      src={randomBeerImage}
      alt="random-beer"
      />


       <img 
      src={newBeerImage}
      alt="new-beer"
      />
    </div>
  )
}

export default HomePage
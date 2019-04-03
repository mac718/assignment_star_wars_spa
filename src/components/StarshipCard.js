import React from 'react';
import { Link } from 'react-router-dom';

const StarshipCard = ({starship, id}) => {
  return (
    <Link to={{pathname: `starships/${id}`}}>
      <div className='StarshipCard card'>
        <ul className='card-body'>
          <li>Name: {starship.name}</li>
          <li>Crew: {starship.crew}</li>
          <li>Passengers: {starship.passengers}</li>
        </ul>
      </div>
    </Link>
  )
}

export default StarshipCard;
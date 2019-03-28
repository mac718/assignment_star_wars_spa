import React from 'react';

const StarshipCard = ({starship}) => {
  return (
    <div className='StarshipCard card'>
      <ul className='card-body'>
        <li>Name: {starship.name}</li>
        <li>Crew: {starship.crew}</li>
        <li>Passengers: {starship.passengers}</li>
      </ul>
    </div>
  )
}

export default StarshipCard;
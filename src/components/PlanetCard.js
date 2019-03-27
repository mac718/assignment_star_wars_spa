import React from 'react';

const PlanetCard = ({planet}) => {
  return (
    <div className='PlanetCard card'>
      <ul className='card-body'>
        <li>Name: {planet.name}</li>
        <li>Climate: {planet.climate}</li>
      </ul>
    </div>
  )
}

export default PlanetCard;
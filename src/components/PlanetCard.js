import React from 'react';
import { Link } from 'react-router-dom';

const PlanetCard = ({planet, id}) => {
  return (
    <Link to={{pathname: `planets/${id}`}}>
    <div className='PlanetCard card'>
      <ul className='card-body'>
        <li>Name: {planet.name}</li>
        <li>Climate: {planet.climate}</li>
      </ul>
    </div>
    </Link>
  )
}

export default PlanetCard;
import React from 'react';
import { Link } from 'react-router-dom';

const SpeciesCard = ({species, id}) => {
  return (
    <Link to={{pathname: `species/${id}`}}>
      <div className='SpeciesCard card'>
        <ul className='card-body'>
          <li>Name: {species.name}</li>
          <li>Climate: {species.climate}</li>
        </ul>
      </div>
    </Link>
  )
}

export default SpeciesCard;
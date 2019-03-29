import React from 'react';

const SpeciesCard = ({species}) => {
  return (
    <div className='SpeciesCard card'>
      <ul className='card-body'>
        <li>Name: {species.name}</li>
        <li>Climate: {species.climate}</li>
      </ul>
    </div>
  )
}

export default SpeciesCard;
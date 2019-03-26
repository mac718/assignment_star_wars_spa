import React from 'react';

const PersonCard = ({person}) => {
  return (
    <div className='PersonCard card'>
      <ul className='card-body'>
        <li>Name: {person.name}</li>
        <li>Birth Year: {person.birth_year}</li>
        <li>Films: {person.films}</li>
      </ul>
    </div>
  )
}

export default PersonCard;
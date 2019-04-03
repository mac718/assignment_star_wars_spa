import React from 'react';
import { Link } from 'react-router-dom';

const PersonCard = ({person, id}) => {
  return (
    <Link to={{pathname: `people/${id}`}}>
      <div className='PersonCard card'>
        <ul className='card-body'>
          <li>Name: {person.name}</li>
          <li>Birth Year: {person.birth_year}</li>
          <li>Films: {person.films}</li>
        </ul>
      </div>
    </Link>
  )
}

export default PersonCard;
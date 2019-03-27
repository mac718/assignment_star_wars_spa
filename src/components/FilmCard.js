import React from 'react';

const FilmCard = ({film}) => {
  return (
    <div className='FilmCard card'>
      <ul className='card-body'>
        <li>Name: {film.name}</li>
        <li>Created: {film.created}</li>
        <li>Release Date: {film.release_date}</li>
      </ul>
    </div>
  )
}

export default FilmCard;
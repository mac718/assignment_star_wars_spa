import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = ({film, id}) => {
  return (
    <Link to={{pathname: `films/${id}`}}>
      <div className='FilmCard card'>
        <ul className='card-body'>
          <li className='name'><h4>{film.title}</h4></li>
          <li>{film.release_date}</li>
          <li>{film.opening_crawl}</li>
        </ul>
      </div>
    </Link>
  )
}

export default FilmCard;
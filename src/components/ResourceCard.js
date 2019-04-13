import React from 'react';
import { Link } from 'react-router-dom';

const ResourceCard = ({resource, resourceType, id, children}) => {
  var listItems = children.map((attribute, i) => (
    <li key={i}>{attribute}: {resource[attribute]}</li>
  ))
  return (
    <Link to={{pathname: `${resourceType}/${id}`}}>
      <div className='ResourceCard card'>
        <ul className='card-body'>
         {listItems}
        </ul>
      </div>
    </Link>
  )
}

export default ResourceCard;
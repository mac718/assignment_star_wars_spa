import React from 'react';
import { Link } from 'react-router-dom';

const ResourceCard = ({resource, resourceType, id, children}) => {
  var listItems = children.slice(1).map((attribute, i) => (
    <li key={i}>{resource[attribute]}</li>
  ))

  return (
    <Link to={{pathname: `${resourceType}/${id}`}}>
      <div className='ResourceCard card'>
        <ul className='card-body'>
          <li><h4>{resource[children[0]]}</h4></li>
         {listItems}
        </ul>
      </div>
    </Link>
  )
}

export default ResourceCard;
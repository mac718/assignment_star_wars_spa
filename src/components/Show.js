import React from 'react';

const Show = ({resource}) => {

  const attributes = Object.keys(resource);
  console.log(resource)
  const details = attributes.map(attribute => (
    <li>{attribute}: {resource[attribute]}</li>
  ))

  return (
    <div className='Show'>
      <h1>{resource.name}</h1>
      <ul className='details'>
        {details}
      </ul>
    </div>
  )

}

export default Show;
import React from 'react';

const VehicleCard = ({vehicle}) => {
  return (
    <div className='VehicleCard card'>
      <ul className='card-body'>
        <li>Name: {vehicle.name}</li>
        <li>Model: {vehicle.model}</li>
      </ul>
    </div>
  )
}

export default VehicleCard;
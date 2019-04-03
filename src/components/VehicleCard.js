import React from 'react';
import { Link } from 'react-router-dom';

const VehicleCard = ({vehicle, id}) => {
  return (
    <Link to={{pathname: `vehicles/${id}`}}>
      <div className='VehicleCard card'>
        <ul className='card-body'>
          <li>Name: {vehicle.name}</li>
          <li>Model: {vehicle.model}</li>
        </ul>
      </div>
    </Link>
  )
}

export default VehicleCard;
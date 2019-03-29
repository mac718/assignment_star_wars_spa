import React from 'react';
import PageLinks from './elements/PageLinks';
import VehicleCard from './VehicleCard';

const Vehicles = ({results, isFetching, currentPage, onPageClick}) => {
  const VehicleCards = results.map((vehicle, i) => (
    <VehicleCard vehicle={vehicle} key={i}/>
  ))

  const VehicleCardPages = []

  let page = [];

  VehicleCards.forEach((vehicleCard, i) => {
    if ((i == 0 || i % 10 != 0) && i < VehicleCards.length) {
      page.push(vehicleCard);
    } else {
      VehicleCardPages.push(page);
      page = []
      page.push(vehicleCard);
    }
  })



  const numberOfPages = VehicleCards.length / 10;

  return (
    <div>
      <h1>Vehicles</h1>
      {isFetching ? <p className='loading'>loading...</p> : VehicleCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )
}

export default Vehicles;
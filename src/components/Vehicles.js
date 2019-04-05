import React from 'react';
import PageLinks from './elements/PageLinks';
import VehicleCard from './VehicleCard';
import SearchContainer from '../containers/SearchContainer';

const Vehicles = ({results, searchResults, isFetching, currentPage, onPageClick}) => {
  let VehicleCards;

  if (searchResults == []){
    VehicleCards = results.map((vehicle, i) => (
      <VehicleCard vehicle={vehicle} id={i + 1} key={i}/>
    ))
  } else {
    VehicleCards = searchResults.map((vehicle, i) => (
      <VehicleCard vehicle={vehicle}  id={i + 1}key={i}/>
    ))
  }

  const VehicleCardPages = []

  let page = [];

  VehicleCards.forEach((vehicleCard, i) => {
    if ((i == 0 || i % 10 != 0) && i != VehicleCards.length - 1) {
      page.push(vehicleCard);
    } else if (i == VehicleCards.length - 1) {
      page.push(vehicleCard);
      VehicleCardPages.push(page);
      page = []
    } else {
      VehicleCardPages.push(page);
      page = []
      page.push(vehicleCard);
    }
  })

  var numberOfPages;

  VehicleCards.length % 10 == 0 ? 
    numberOfPages = VehicleCards.length / 10 : numberOfPages = VehicleCards.length / 10 + 1

  return (
    <div>
      <h1>Vehicles</h1>
      <SearchContainer />
      {isFetching ? <p className='loading'>loading...</p> : VehicleCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )
}

export default Vehicles;
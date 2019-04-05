import React from 'react';
import PageLinks from './elements/PageLinks';
import PlanetCard from './PlanetCard';
import SearchContainer from '../containers/SearchContainer';

const Planets = ({results, searchResults, isFetching, currentPage, onPageClick}) => {
  let PlanetCards;

  if (searchResults == []){
    PlanetCards = results.map((planet, i) => (
      <PlanetCard planet={planet} id={i + 1} key={i}/>
    ))
  } else {
    PlanetCards = searchResults.map((planet, i) => (
      <PlanetCard planet={planet}  id={i + 1}key={i}/>
    ))
  }

  const PlanetCardPages = []

  let page = [];

  PlanetCards.forEach((planetCard, i) => {
    if ((i == 0 || i % 10 != 0) && i != PlanetCards.length - 1) {
      page.push(planetCard);
    } else if (i == PlanetCards.length - 1) {
      page.push(planetCard);
      PlanetCardPages.push(page);
      page = []
    } else {
      PlanetCardPages.push(page);
      page = []
      page.push(planetCard);
    }
  })

  var numberOfPages;

  PlanetCards.length % 10 == 0 ? 
    numberOfPages = PlanetCards.length / 10 : numberOfPages = PlanetCards.length / 10 + 1

  return (
    <div>
      <h1>Planets</h1>
      <SearchContainer />
      {isFetching ? <p className='loading'>loading...</p> : PlanetCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )
}

export default Planets;
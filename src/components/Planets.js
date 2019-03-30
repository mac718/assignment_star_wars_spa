import React from 'react';
import PageLinks from './elements/PageLinks';
import PlanetCard from './PlanetCard';

const Planets = ({results, isFetching, currentPage, onPageClick}) => {
  const PlanetCards = results.map((planet, i) => (
    <PlanetCard planet={planet} id={i + 1} key={i}/>
  ))

  const PlanetCardPages = []

  let page = [];

  PlanetCards.forEach((planetCard, i) => {
    if ((i == 0 || i % 10 != 0) && i < PlanetCards.length) {
      page.push(planetCard);
    } else {
      PlanetCardPages.push(page);
      page = []
      page.push(planetCard);
    }
  })



  const numberOfPages = PlanetCards.length / 10;

  return (
    <div>
      <h1>Planets</h1>
      {isFetching ? <p className='loading'>loading...</p> : PlanetCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )
}

export default Planets;
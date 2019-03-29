import React from 'react';
import PageLinks from './elements/PageLinks';
import SpeciesCard from './SpeciesCard';

const Species = ({results, isFetching, currentPage, onPageClick}) => {
  const SpeciesCards = results.map((species, i) => (
    <SpeciesCard species={species} key={i}/>
  ))

  const SpeciesCardPages = []

  let page = [];

  SpeciesCards.forEach((speciesCard, i) => {
    if ((i == 0 || i % 10 != 0) && i < SpeciesCards.length) {
      page.push(speciesCard);
    } else {
      SpeciesCardPages.push(page);
      page = []
      page.push(speciesCard);
    }
  })



  const numberOfPages = SpeciesCards.length / 10;

  return (
    <div>
      <h1>Species</h1>
      {isFetching ? <p className='loading'>loading...</p> : SpeciesCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )
}

export default Species;
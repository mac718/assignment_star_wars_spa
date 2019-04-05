import React from 'react';
import PageLinks from './elements/PageLinks';
import SpeciesCard from './SpeciesCard';
import SearchContainer from '../containers/SearchContainer';

const Species = ({results, searchResults, isFetching, currentPage, onPageClick}) => {
  let SpeciesCards;

  if (searchResults == []){
    SpeciesCards = results.map((species, i) => (
      <SpeciesCard species={species} id={i + 1} key={i}/>
    ))
  } else {
    SpeciesCards = searchResults.map((species, i) => (
      <SpeciesCard species={species}  id={i + 1}key={i}/>
    ))
  }

  const SpeciesCardPages = []

  let page = [];

  SpeciesCards.forEach((speciesCard, i) => {
   if ((i == 0 || i % 10 != 0) && i != SpeciesCards.length - 1) {
      page.push(speciesCard);
    } else if (i == SpeciesCards.length - 1) {
      page.push(speciesCard);
      SpeciesCardPages.push(page);
      page = []
    } else {
      SpeciesCardPages.push(page);
      page = []
      page.push(speciesCard);
    }
  })

  var numberOfPages;

  SpeciesCards.length % 10 == 0 ? 
    numberOfPages = SpeciesCards.length / 10 : numberOfPages = SpeciesCards.length / 10 + 1

  return (
    <div>
      <h1>Species</h1>
      <SearchContainer />
      {isFetching ? <p className='loading'>loading...</p> : SpeciesCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )
}

export default Species;
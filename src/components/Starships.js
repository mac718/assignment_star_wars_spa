import React from 'react';
import StarshipCard from './StarshipCard';
import PageLinks from './elements/PageLinks';

const Starships = ({results, isFetching, onPageClick, currentPage}) => {
  const StarshipCards = results.map((starship, i) => (
    <StarshipCard starship={starship} key={i}/>
  ))

  const StarshipCardPages = []

  let page = [];

  StarshipCards.forEach((starshipCard, i) => {
    if ((i == 0 || i % 10 != 0) && i < StarshipCards.length) {
      page.push(starshipCard);
    } else {
      StarshipCardPages.push(page);
      page = []
      page.push(starshipCard);
    }
  })



  const numberOfPages = StarshipCards.length / 10;

  return (
    <div>
      <h1>Starships</h1>
      {isFetching ? <p className='loading'>loading...</p> : StarshipCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )

}

export default Starships;
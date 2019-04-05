import React from 'react';
import StarshipCard from './StarshipCard';
import PageLinks from './elements/PageLinks';
import SearchContainer from '../containers/SearchContainer';

const Starships = ({results, searchResults, isFetching, onPageClick, currentPage}) => {
  let StarshipCards;

  if (searchResults == []){
    StarshipCards = results.map((starship, i) => (
      <StarshipCard starship={starship} id={i + 1} key={i}/>
    ))
  } else {
    StarshipCards = searchResults.map((starship, i) => (
      <StarshipCard starship={starship}  id={i + 1}key={i}/>
    ))
  }

  const StarshipCardPages = []

  let page = [];

  StarshipCards.forEach((starshipCard, i) => {
     if ((i == 0 || i % 10 != 0) && i != StarshipCards.length - 1) {
      page.push(starshipCard);
    } else if (i == StarshipCards.length - 1) {
      page.push(starshipCard);
      StarshipCardPages.push(page);
      page = []
    } else {
      StarshipCardPages.push(page);
      page = []
      page.push(starshipCard);
    }
  })

  console.log(StarshipCardPages)



  var numberOfPages;

  StarshipCards.length % 10 == 0 ? 
    numberOfPages = StarshipCards.length / 10 : numberOfPages = StarshipCards.length / 10 + 1

  return (
    <div>
      <h1>Starships</h1>
      <SearchContainer />
      {isFetching ? <p className='loading'>loading...</p> : StarshipCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )

}

export default Starships;
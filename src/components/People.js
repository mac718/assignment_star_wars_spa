import React from 'react';
import PersonCard from './PersonCard';
import PageLinks from './elements/PageLinks';
import SearchContainer from '../containers/SearchContainer';

const People = ({results, isFetching, onPageClick, currentPage, searchResults}) => {
  let PersonCards;

  if (searchResults == []){
    PersonCards = results.map((person, i) => (
      <PersonCard person={person} id={i + 1} key={i}/>
    ))
  } else {
    PersonCards = searchResults.map((person, i) => (
      <PersonCard person={person}  id={i + 1}key={i}/>
    ))
  }

  const PersonCardPages = []

  let page = [];

  PersonCards.forEach((personCard, i) => {
    if ((i == 0 || i % 10 != 0) && i != PersonCards.length - 1) {
      page.push(personCard);
    } else if (i == PersonCards.length - 1) {
      page.push(personCard);
      PersonCardPages.push(page);
      page = []
    } else {
      PersonCardPages.push(page);
      page = []
      page.push(personCard);
    }
  })

  var numberOfPages;

  PersonCards.length % 10 == 0 ? 
    numberOfPages = PersonCards.length / 10 : numberOfPages = PersonCards.length / 10 + 1

  return (
    <div>
      <h1>People</h1>
      <SearchContainer />
      {isFetching ? <p className='loading'>loading...</p> : PersonCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )

}

export default People;
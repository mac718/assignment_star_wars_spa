import React from 'react';
import PersonCard from './PersonCard';
import PageLinks from './elements/PageLinks';

const People = ({results, isFetching, onPageClick, currentPage}) => {
  const PersonCards = results.map((person, i) => (
    <PersonCard person={person} key={i}/>
  ))

  const PersonCardPages = []

  let page = [];

  PersonCards.forEach((personCard, i) => {
    if ((i == 0 || i % 10 != 0) && i < PersonCards.length) {
      page.push(personCard);
    } else {
      PersonCardPages.push(page);
      page = []
      page.push(personCard);
    }
  })



  const numberOfPages = PersonCards.length / 10;

  return (
    <div>
      {isFetching ? <p>loading...</p> : PersonCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )

}

export default People;
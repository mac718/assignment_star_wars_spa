import React from 'react';
import PersonCard from './PersonCard';
import PageLinks from './elements/PageLinks';

const People = ({results, isFetching, onPageClick, currentPage}) => {
  const PersonCards = results.map((person, i) => (
    <PersonCard person={person} id={i + 1} key={i}/>
  ))

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



  const numberOfPages = Math.ceil((PersonCards.length+1) / 10) * 10

  return (
    <div>
      <h1>People</h1>
      {isFetching ? <p className='loading'>loading...</p> : PersonCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )

}

export default People;
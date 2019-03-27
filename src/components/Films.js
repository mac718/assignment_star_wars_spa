import React from 'react';
import PageLinks from './elements/PageLinks';
import FilmCard from './FilmCard';

const Films = ({results, isFetching, currentPage, onPageClick}) => {
  const FilmCards = results.map((film, i) => (
    <FilmCard film={film} key={i}/>
  ))

  const FilmCardPages = []

  let page = [];

  FilmCards.forEach((filmCard, i) => {
    if ((i == 0 || i % 10 != 0) && i != FilmCards.length - 1) {
      page.push(filmCard);
    } else if (i == FilmCards.length - 1) {
      page.push(filmCard);
      FilmCardPages.push(page);
      page = []
    } else {
      FilmCardPages.push(page);
      page = []
      page.push(filmCard);
    }
  })



  const numberOfPages = FilmCards.length / 10;

  return (
    <div>
      {isFetching ? <p>loading...</p> : FilmCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )
}

export default Films;
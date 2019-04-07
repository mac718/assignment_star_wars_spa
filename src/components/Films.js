import React from 'react';
import PageLinks from './elements/PageLinks';
import FilmCard from './FilmCard';
import SearchContainer from '../containers/SearchContainer';

const Films = ({results, searchResults, isFetching, currentPage, onPageClick}) => {

  let FilmCards;

  if (searchResults == []){
    FilmCards = results.map((film, i) => {
      let id = film.url.split('/').reverse()[1];
      return <FilmCard film={film} id={id} key={i}/>
    })
  } else {
    FilmCards = searchResults.map((film, i) => {
      let id = film.url.split('/').reverse()[1];
      return <FilmCard film={film} id={id} key={i}/>
    })
  }

  let FilmCardPages = []

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

  var numberOfPages;

  FilmCards.length % 10 == 0 ? 
    numberOfPages = FilmCards.length / 10 : numberOfPages = FilmCards.length / 10 + 1

  return (
    <div>
      <h1>Films</h1>
      <SearchContainer />
      {isFetching ? <p className='loading'>loading...</p> : FilmCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )
}

export default Films;
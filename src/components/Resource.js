import React from 'react';
import PageLinks from './elements/PageLinks';
import ResourceCard from './ResourceCard';
import SearchContainer from '../containers/SearchContainer';

const Resource = ({results, searchResults, isFetching, currentPage, onPageClick, children, resourceType}) => {

  let ResourceCards;

  if (searchResults == []){
    ResourceCards = results.map((resource, i) => {
      let id = resource.url.split('/').reverse()[1];
      return <ResourceCard resource={resource} resourceType={resourceType} children={children} id={id} key={i}/>
    })
  } else {
    ResourceCards = searchResults.map((resource, i) => {
      let id = resource.url.split('/').reverse()[1];
      return <ResourceCard resource={resource} resourceType={resourceType} children={children} id={id} key={i}/>
    })
  }

  let ResourceCardPages = []

  let page = [];

  ResourceCards.forEach((resourceCard, i) => {
    if ((i == 0 || i % 10 != 0) && i != ResourceCards.length - 1) {
      page.push(resourceCard);
    } else if (i == ResourceCards.length - 1) {
      page.push(resourceCard);
      ResourceCardPages.push(page);
      page = []
    } else {
      ResourceCardPages.push(page);
      page = []
      page.push(resourceCard);
    }
  })

  var numberOfPages;

  ResourceCards.length % 10 == 0 ? 
    numberOfPages = ResourceCards.length / 10 : numberOfPages = ResourceCards.length / 10 + 1

  var heading = resourceType.charAt(0).toUpperCase() + resourceType.slice(1);

  return (
    <div>
      <h1>{heading}</h1>
      <SearchContainer />
      {isFetching ? <p className='loading'>loading...</p> : ResourceCardPages[currentPage - 1]}
      <PageLinks numberOfPages={numberOfPages} onPageClick={onPageClick} />
    </div>
  )
}

export default Resource;
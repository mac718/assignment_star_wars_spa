import React from 'react';

const PageLinks = ({numberOfPages, onPageClick}) => {
  var pageLinks = []

  for (var i = 1; i <= numberOfPages; i++) {
    pageLinks.push(<li className="page-item" key={i}><a className="page-link" href="#" onClick={onPageClick}>{i}</a></li>)
  }
  return (
    <nav id="page-links" aria-label="Page navigation">
      <ul className="pagination pagination-lg justify-content-center">
        {pageLinks}
      </ul>
    </nav>
  )
}

export default PageLinks;
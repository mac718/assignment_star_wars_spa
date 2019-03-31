import React from 'react';

const Search = ({results, onSubmit}) => {
  return (
    <form className='Search' onSubmit={onSubmit} results={results}>
      <label htmlFor='search'>Search: </label>
      <input type='text' name='search' />
      <input type='submit' />
    </form>
  )
}

export default Search;
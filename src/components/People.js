import React from 'react';

const People = ({results, isFetching}) => {
  //console.log(results[0])
  const names = results.map(person => (
    person.name
  ))

  return (
    <div>
      {isFetching ? <p>loading...</p> : names}
    </div>
  )

}

export default People;
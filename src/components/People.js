import React from 'react';
import PersonCard from './PersonCard';

const People = ({results, isFetching}) => {
  //console.log(results[0])
  const PersonCards = results.map((person, i) => (
    <PersonCard person={person} key={i}/>
  ))

  return (
    <div>
      {isFetching ? <p>loading...</p> : PersonCards}
    </div>
  )

}

export default People;
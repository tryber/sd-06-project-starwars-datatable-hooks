import React, { useState, useContext } from 'react';
import Table from './Table';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const { planets } = useContext(StarWarsContext);
  const [query, setQuery] = useState('');

  function search(planetas) {
    const columns = planetas[0] && Object.keys(planetas[0]);
    const someTrue = -1;

    return planetas.filter(((planeta) => columns.some(
      (column) => planeta[column].toString().toLowerCase()
        .indexOf(query.toLowerCase()) > someTrue,
    )));
  }

  return (
    <div>
      <input type="text" data-testeid="name-filter" />
      <input
        type="text"
        value={ query }
        onChange={ (e) => setQuery(e.target.value) }
      />
      <Table planets={ search(planets) } />
    </div>
  );
}

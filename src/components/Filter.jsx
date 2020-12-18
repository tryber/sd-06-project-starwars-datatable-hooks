import React, { useState, useContext } from 'react';
import Table from './Table';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const { planets } = useContext(StarWarsContext);
  const [filters, setFilters] = useState('');
  const someTrue = -1;

  // function handleFilter({ target: { name, value } }) {
  //   if (name === 'filterByName') setQuery({ [name]: { name: value } });
  // }

  function search(rows) {
    return rows.filter(
      (row) => row.name
        .toLowerCase()
        .indexOf(filters) > someTrue || row.climate
        .toLowerCase().indexOf(filters) > someTrue,
    );
  }

  return (
    <div>
      <input
        data-testeid="name-filter"
        type="text"
        value={ filters }
        onChange={ (e) => setFilters(e.target.value) }
      />
      <Table planets={ search(planets) } />
    </div>
  );
}

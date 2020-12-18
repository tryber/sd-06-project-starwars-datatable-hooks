import React, { useState, useContext } from 'react';
import Table from './Table';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const { planets, filters, setFilters } = useContext(StarWarsContext);
  const someTrue = -1;

  // function handleFilter({ target: { name, value } }) {
  //   if (name === 'filterByName') setQuery({ [name]: { name: value } });
  // }

  function search(rows) {
    return rows.filter(
      (row) => row.name.toLowerCase().indexOf(filters) > someTrue
    );
  }
  function handleChange(e){
    setFilters({...filters, filterByName:{name:e.target.value}})

  }

  return (
    <div>
      <input
        data-testeid="name-filter"
        type="text"
        value={ filters.filterByName.name }
        onChange={ handleChange }
      />
      {/*<Table planets={ search(planets) } />*/}
    </div>
  );
}

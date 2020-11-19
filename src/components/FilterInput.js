import React, { useState, useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterInput() {
  const { filters, setFilters} = useContext(StarWarsContext);
  const [ filter, setFilter ] = useState('');

  const filterName = { filterByName: { name: filter } };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters(filterName);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name-filter">
        Search
      </label>
      <input
        id="name-filter"
        type="text"
        placeHolder="Enter text to filter planets"
        data-testid="name-filter"
        onChange={ (e) => setFilter(e.target.value) }
        value={filter}
      />
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default FilterInput;

import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const {
    filterByName,
    setFilterName,
    filterByNumericValues,
    setNumericValues,
    setFilters } = useContext(StarWarsContext);

  const clearFilter = () => {
    console.log(filterByNumericValues);
  };

  return (
    <section>
      <label htmlFor="name-filter">
        Name:
        <input
          type="text"
          name="name-filter"
          data-testid="name-filter"
          onChange={ (event) => setFilterName({
            ...filterByName, name: event.target.value.toLowerCase(),
          }) }
        />
      </label>
      <select
        data-testid="column-filter"
        onChange={ (event) => setNumericValues({
          ...filterByNumericValues, column: event.target.value,
        }) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setNumericValues({
          ...filterByNumericValues, comparision: event.target.value,
        }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <button
        type="button"
        data-testid='filter'
        onClick={ clearFilter }
      >
        X
      </button>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => setNumericValues({
          ...filterByNumericValues, value: event.target.value,
        }) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilters(true) }
      >
        Aplly Filters
      </button>
    </section>
  );
}

export default SearchBar;

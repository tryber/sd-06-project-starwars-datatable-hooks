import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
  });

  const handleFilters = ({ target: { name, value } }) => {
    if (name === 'filterByName') {
      setFilters({
        [name]: {
          name: value,
        },
      });
    } else {
      setNumericFilter({
        ...numericFilter,
        [name]: value,
      });
    }
  };

  const handleButton = () => {
    if (!numericFilter.value || numericFilter.column === '') {
      return null;
    }
    if (!filters.filterByNumericValues) {
      setFilters({
        ...filters,
        filterByNumericValues: [numericFilter],
      });
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, numericFilter],
      });
    }
  };

  return (
    <fieldset>
      <p>Filters:</p>
      <div>
        <label htmlFor="filterByName">
          Name:
          <input
            name="filterByName"
            type="text"
            data-testid="name-filter"
            onChange={ (e) => handleFilters(e) }
          />
        </label>
      </div>
      <div>
        <fieldset>
          <label htmlFor="column">
            Properties:
            <select
              name="column"
              data-testid="column-filter"
              onChange={ (e) => handleFilters(e) }
            >
              <option value="population">population</option>
              <option value="orbital_period">orbital_period</option>
              <option value="diameter">diameter</option>
              <option value="rotation_period">rotation_period</option>
              <option value="surface_water">surface_water</option>
            </select>
          </label>
          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={ (e) => handleFilters(e) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            name="value"
            type="number"
            data-testid="value-filter"
            onChange={ (e) => handleFilters(e) }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handleButton }
          >
            Filter
          </button>
        </fieldset>
      </div>
    </fieldset>
  );
}

export default Filter;

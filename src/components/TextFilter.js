import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './TextFilter.css';

function TextFilter() {
  const {
    filters,
    setFilters,
  } = useContext(StarWarsContext);

  const { filters: { filterByName } } = filters;

  const onChange = (event) => {
    const { name: objectKey, value } = event.target;

    setFilters({
      ...filters,
      filters: {
        ...filters.filters,
        filterByName: {
          ...filters.filters.filterByName,
          [objectKey]: value,
        },
      },
    });
  };

  return (
    <div className="textFilter-container">
      <label htmlFor="text-input">
        Planet name:
        <input
          type="text"
          id="text-input"
          name="name"
          className="text-input border border-primary border-5 rounded"
          data-testid="name-filter"
          placeholder="Type planet name"
          onChange={ (event) => onChange(event) }
          value={ filterByName.name }
        />
      </label>

    </div>
  );
}

export default TextFilter;

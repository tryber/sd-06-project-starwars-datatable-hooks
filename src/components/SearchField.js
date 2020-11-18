import React, { useContext, useState } from 'react';
import FilterContext from '../context/FilterContext';

function SearchField() {
  const { filterName, setFilterName, filterByNumber } = useContext(FilterContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState();

  const addFilter = () => {
    filterByNumber(column, comparison, value);
  };

  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period',
    'surface_water',
  ];
  return (
    <div>
      <label htmlFor="name-input">
        Search for planet:
        <input
          data-testid="name-filter"
          id="name-input"
          type="text"
          placeholder="name"
          name="planet-name"
          value={ filterName }
          onChange={ (event) => setFilterName(event.target.value) }
        />
      </label>
      <label htmlFor="filter-column">
        Filter by:
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ (event) => setColumn(event.target.value) }
        >
          {
            columns.map((filterColumn, index) => (
              <option
                key={ index }
                value={ filterColumn }
              >
                {filterColumn}
              </option>
            ))
          }
        </select>
      </label>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (event) => setComparison(event.target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ (event) => setValue(event.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addFilter }
      >
        Filter
      </button>
    </div>
  );
}

export default SearchField;

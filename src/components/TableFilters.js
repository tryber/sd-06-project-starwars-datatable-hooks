import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';
import { setCurrentFilters } from '../helpers/filters';
import NumericFilterRow from './NumericFilterRow';

function TableFilters() {
  const {
    setNameFilter, setNumericFilters, filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  const mainFilters = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const selectedFilters = filterByNumericValues.map((filter) => filter.column);
  const currentFilters = setCurrentFilters(mainFilters, selectedFilters);

  function saveFilter(column, comparison, value) {
    setNumericFilters([...filterByNumericValues, {
      column,
      comparison,
      value: parseInt(value, 10),
    }]);
  }

  function removeFilter({ target }) {
    const { name } = target;

    const newFilters = filterByNumericValues.filter((filter) => filter.column !== name);

    setNumericFilters(newFilters);
  }

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filter by Name"
        onChange={ (event) => setNameFilter(event.target.value) }
      />
      <NumericFilterRow
        currentFilters={ currentFilters }
        saveFilter={ saveFilter }
      />
      <div>
        <p>
          Selected Filters:
          {selectedFilters.map((filter) => (
            <button type="button" key={ filter } name={ filter } onClick={ removeFilter }>
              {`${filter} `}
            </button>
          ))}
        </p>
      </div>

      {/* {'seletec filters' settedFilters.map 'x'} */}
    </section>
  );
}

export default TableFilters;

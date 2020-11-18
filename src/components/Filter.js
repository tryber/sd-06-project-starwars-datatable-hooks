import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { filters:
    { filterByNumericValues }, setFilter, filters } = useContext(StarWarsContext);
  const removeFilter = (obj) => {
    setFilter({ ...filters,
      filterByNumericValues: filterByNumericValues.filter((e) => e !== obj) });
  };
  return (
    <div className="filter-component">
      { filterByNumericValues.map((filter, index) => (
        <div key={ index } className="filter" data-testid="filter">
          <p>
            {filter.column}
          </p>
          <p>
            {filter.comparison}
          </p>
          <p>
            {filter.value}
          </p>
          <button type="button" onClick={ () => removeFilter(filter) }>X</button>
        </div>))}
    </div>
  );
}

export default Filter;

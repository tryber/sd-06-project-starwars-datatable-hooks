import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const {
    filters: { filterByNumericValues },
    deleteNumericFilter,
  } = useContext(StarWarsContext);
  return (
    <section>
      {filterByNumericValues.map((filter, index) => (
        <div className="list-group" data-testid="filter" key={ index }>
          <div className="list-group-item">
            <span>
              {filter.column}
              {' '}
              {filter.comparison}
              {' '}
              {filter.value}
            </span>
            <button
              className="btn btn-dark"
              type="button"
              onClick={ () => deleteNumericFilter(filter) }
            >
              X
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Filters;

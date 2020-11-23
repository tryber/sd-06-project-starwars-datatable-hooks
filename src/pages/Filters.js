import React, { useContext } from 'react';
import StarWarsContext from '../context';

function Filters() {
  const { filters: { filterByNumericValues }, setFilters } = useContext(StarWarsContext);

  const excludeFilter = (filter) => {
    const index = filterByNumericValues.indexOf(filter);
    console.log(index);
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [
        ...prevState.filterByNumericValues.splice(0, index),
        ...prevState.filterByNumericValues.splice(index + 1),
      ],
    }));
  };
  return (
    <div>
      { filterByNumericValues.map((filter, index) => {
        const { column, range, rangeNumber, color } = filter;
        return (
          <div key={ index } style={ { backgroundColor: color } }>
            <p>{ `${column} ${range} ${rangeNumber}` }</p>
            <button
              type="button"
              onClick = { () => excludeFilter(filter) }
            >
              Excluir
            </button>
          </div>
        );
      }) }
    </div>
  );
}

export default Filters;

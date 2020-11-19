import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function DeleteFilters() {
  const {
    filters: { filterNumeric: {
      filterByNumericValues,
      setFilterByNumericValues,
    } },
  } = useContext(StarWarsContext);
  function onClickDelete({ target: { name } }) {
    setFilterByNumericValues(filterByNumericValues
      .filter(({ column }) => column !== name));
  }
  return (
    <div>
      {filterByNumericValues.map(({
        column,
        comparison,
        value,
      }) => (
        <span
          data-testid="filter"
          key={ column }
        >
          {`${column} ${comparison} ${value}`}
          <button
            type="button"
            name={ column }
            onClick={ onClickDelete }
          >
            X
          </button>
        </span>
      ))}
    </div>
  );
}

export default DeleteFilters;

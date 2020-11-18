import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);

  const handleClick = ({ target }) => {
    const formatedFilter = filterByNumericValues
      .filter((filter) => filter.column !== target.value);
    setFilterByNumericValues(formatedFilter);
  };

  return (
    <ul>
      {filterByNumericValues.map((filter, index) => (
        <li key={ index } data-testid="filter">
          {`${filter.column} ${filter.comparison} ${filter.value} `}
          <button type="button" onClick={ handleClick } value={ filter.column }>X</button>
        </li>
      ))}
    </ul>
  );
}

export default Filters;

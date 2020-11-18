import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);
  const formatedFilter = filterByNumericValues;

  const handleClick = ({ target }) => {
    formatedFilter.splice(target.value, 1);
    setFilterByNumericValues(formatedFilter);
    console.log(filterByNumericValues);
    console.log(formatedFilter);
  };

  return (
    <ul>
      {filterByNumericValues.map((filter, index) => (
        <li key={ index }>
          {`${filter.column} ${filter.comparison} ${filter.value} `}
          <button type="button" onClick={ handleClick } value={ index }>X</button>
        </li>
      ))}
    </ul>
  );
}

export default Filters;

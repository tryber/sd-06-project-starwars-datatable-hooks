import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const CustomFilters = () => {
  const { filters } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  const handleRemove = () => {
    console.log('removeu');
  };

  return (
    <div>
      <h1>Filtros: </h1>
      {filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div key={ index }>
          <span>{ `${column} ${comparison} ${value} ` }</span>
          <button id={ index } type="button" onClick={ handleRemove }>X</button>
        </div>
      ))}
    </div>
  );
};

export default CustomFilters;

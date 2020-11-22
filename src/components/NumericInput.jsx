import React, { useContext, useState, useEffect } from 'react';

import StarWarsContext from '../context/StarWarsContext';
import Filters from './Filters';

function NumericInput() {
  const dynamicFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const {
    context: {
      column,
      setColumn,
      setComparison,
      value,
      setValue,
      handleClick,
    },
  } = useContext(StarWarsContext);
  const [dynamicFilterChange, setDynamicFilterChange] = useState([]);
  const [newFilter, setNewFilter] = useState(dynamicFilter);

  const addFilter = () => {
    handleClick();
    dynamicFilterChange
      .filter((col1) => setNewFilter(newFilter.filter((col2) => col2 !== col1)));
  };

  useEffect(() => {
    if (column !== '') {
      setDynamicFilterChange([...dynamicFilterChange, column]);
    }
  }, [column]);

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {newFilter
          .map((newColumn, index) => (
            <option
              key={ index }
              value={ newColumn }
            >
              {newColumn}
            </option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => addFilter() }
      >
        Filtrar
      </button>
      <Filters />
    </div>
  );
}

export default NumericInput;

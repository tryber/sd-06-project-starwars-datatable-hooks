import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchByNumber() {
  const initialValue = 0;

  const {
    filteredColumn,
    setFilteredColumn,
    filterByNumber,
  } = useContext(StarWarsContext);

  const [filterByComparation, setFilterByComparation] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(initialValue);

  return (
    <div>
      <form>
        <select
          value={ filteredColumn }
          onChange={ ({ target }) => setFilteredColumn(target.value) }
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>

        <select
          value={ filterByComparation }
          onChange={ ({ target }) => setFilterByComparation(target.value) }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          type="number"
          value={ valueFilter }
          onChange={ ({ target }) => setValueFilter(target.value) }
          data-testid="value-filter"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => filterByNumber(filteredColumn, filterByComparation, valueFilter) }
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

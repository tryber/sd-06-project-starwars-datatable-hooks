import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function FilterBar() {
  const [column, setColumnFilter] = useState('population');
  const [comparison, setComparisonFilter] = useState('maior que');
  const INITIAL_VALUE = 0;
  const [value, setValueFilter] = useState(INITIAL_VALUE);
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByName: { name }, filterByNumericValues } = filters;

  const handleNameFilter = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: { name: target.value },
    });
  };

  const handleNumericFilters = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  const deleteFilter = (filterIndex) => {
    setFilters({
      ...filters,
      filterByNumericValues: filterByNumericValues
        .filter((_, index) => index !== filterIndex),
    });
  };

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ handleNameFilter }
      />
      <select
        value={ column }
        data-testid="column-filter"
        onChange={ ({ target }) => setColumnFilter(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        value={ comparison }
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparisonFilter(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        value={ value }
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setValueFilter(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleNumericFilters }
      >
        Confirm

      </button>
      <ul>
        {filterByNumericValues.map((each, index) => (
          <li key={ index }>
            {`${each.column} ${each.comparison} ${each.value} `}
            <button type="button" onClick={ () => deleteFilter(index) }>exluir</button>
          </li>
        ))}
      </ul>
    </form>
  );
}

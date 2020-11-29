import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const [column, setColumnFilter] = useState('population');
  const [comparison, setComparisonFilter] = useState('maior que');
  const INITIAL_VALUE = 0;
  const [value, setValueFilter] = useState(INITIAL_VALUE);
  const { data, filters, setFilters, setChangedFilters } = useContext(StarWarsContext);
  const { filterByName: { name }, filterByNumericValues, availableFilters } = filters;

  const [columnOrder, setColumnOrder] = useState('name');
  const [sortOrder, setSortOrder] = useState('ASC');

  const handleNameFilter = ({ target }) => {
    setChangedFilters(true);
    setFilters({
      ...filters,
      filterByName: { name: target.value },
    });
  };

  const handleNumericFilters = () => {
    setChangedFilters(true);
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
    setChangedFilters(true);
    setFilters({
      ...filters,
      filterByNumericValues: filterByNumericValues
        .filter((_, index) => index !== filterIndex),
    });
  };

  const handleOrderFilter = () => {
    setFilters({
      ...filters,
      order: {
        column: columnOrder,
        sort: sortOrder,
      },
    });
  };

  const isASC = (sortOrder === 'ASC');
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
        {availableFilters.map((eachColumn) => (
          <option key={ eachColumn } value={ eachColumn }>{eachColumn}</option>
        ))}
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
          <li key={ index } data-testid="filter">
            {`${each.column} ${each.comparison} ${each.value} `}
            <button
              type="button"
              onClick={ () => deleteFilter(index) }
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <div>
        <select
          data-testid="column-sort"
          value={ columnOrder }
          onChange={ ({ target }) => setColumnOrder(target.value) }
        >
          {(data.length > INITIAL_VALUE) && Object.keys(data[0]).map((title) => (
            <option key={ title } value={ title }>
              {title}
            </option>
          ))}
        </select>
        <label htmlFor="ASC">
          ASC
          <input
            type="radio"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ () => setSortOrder('ASC') }
            checked={ isASC }
          />
        </label>
        <label htmlFor="order">
          DESC
          <input
            type="radio"
            value="DESC"
            data-testid="column-sort-input-desc"
            checked={ !isASC }
            onChange={ () => setSortOrder('DESC') }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleOrderFilter }
        >
          Sort
        </button>
      </div>
    </form>
  );
}

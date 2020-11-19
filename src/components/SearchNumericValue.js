import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchNumericValue() {
  const { filters, currentNumericFilterHandler } = useContext(StarWarsContext);

  const [filteredColumn, setFilteredColumn] = useState('population');
  const [filteredComparison, setFilteredComparison] = useState('maior que');
  const defaultValue = 0;
  const [filteredValue, setFilteredValue] = useState(defaultValue);
  const [usedFilters, setUsedFilters] = useState([]);

  const columnFilterOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisonFilterOptions = [
    'maior que',
    'menor que',
    'igual a',
  ];

  useEffect(() => {
    const { filterByNumericValues } = filters;
    setUsedFilters(filterByNumericValues
      .map((currentFilter) => currentFilter.column));
  }, [currentNumericFilterHandler, filters]);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="column-filter">
          Coluna:
          <select
            className="form-control"
            name="column-filter"
            id="column-filter"
            data-testid="column-filter"
            value={ filteredColumn }
            onChange={ ({ target: { value } }) => setFilteredColumn(value) }
          >
            { columnFilterOptions.map((columnOption) => {
              if (!usedFilters.includes(columnOption)) {
                return (
                  <option
                    key={ columnOption }
                    value={ columnOption }
                  >
                    { columnOption }
                  </option>
                );
              }
              return null;
            }) }
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Faixa de valor:
          <select
            className="form-control"
            name="comparison-filter"
            id="comparison-filter"
            data-testid="comparison-filter"
            value={ filteredComparison }
            onChange={ ({ target: { value } }) => setFilteredComparison(value) }
          >
            { comparisonFilterOptions.map((comparisonOption) => (
              <option
                key={ comparisonOption }
                value={ comparisonOption.toLowerCase() }
              >
                { comparisonOption }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="value-filter">
          Valor da busca:
          <input
            className="form-control"
            data-testid="value-filter"
            type="number"
            name="value-filter"
            id="value-filter"
            value={ filteredValue }
            onChange={ ({ target: { value } }) => setFilteredValue(value) }
          />
        </label>
      </div>
      <button
        className="btn btn-dark"
        type="button"
        onClick={ () => currentNumericFilterHandler(
          filteredColumn,
          filteredComparison,
          filteredValue,
        ) }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default SearchNumericValue;

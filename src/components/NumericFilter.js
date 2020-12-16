import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumericFilter() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const initialValue = 0;
  const [value, setValue] = useState(initialValue);
  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisonTypes = [
    'maior que',
    'menor que',
    'igual a',
  ];
  const [availableColumns, setAvailableColumns] = useState([...columns]);

  const onColumnChange = ({ target }) => {
    const selectedColumn = target.value;
    setColumn(selectedColumn);
  };

  const onComparisonChange = ({ target }) => {
    const selectedComparison = target.value;
    setComparison(selectedComparison);
  };

  const onvalueChange = ({ target }) => {
    const selectedValue = target.value;
    setValue(selectedValue);
  };

  const sendFilter = () => {
    const newFilter = {
      column,
      comparison,
      value,
    };
    setFilters({
      ...filters,
      filters: {
        ...filters.filters,
        filterByNumericValue: [
          ...filters.filters.filterByNumericValue,
          newFilter,
        ],
      },
    });
    const newAvailableColumns = availableColumns
      .filter((individualColumn) => individualColumn !== column);
    setAvailableColumns(newAvailableColumns);
    console.log(filters);
  };

  return (
    <div>
      <label htmlFor="select-filter">
        Select a column:
        <select
          id="select-filter"
          onChange={ onColumnChange }
          value={ column }
          data-testid="column-filter"
        >
          { availableColumns.map((nonFilteredColumn, index) => (
            <option key={ index } value={ nonFilteredColumn }>
              { nonFilteredColumn }
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparison:
        <select
          id="comparison-filter"
          onChange={ onComparisonChange }
          value={ comparison }
          data-testid="comparison-filter"
        >
          { comparisonTypes.map((type, index) => (
            <option key={ index } value={ type }>
              { type }
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="value-filter">
        value:
        <input
          type="number"
          id="value-filter"
          onChange={ onvalueChange }
          value={ value }
          data-testid="value-filter"
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ sendFilter }
      >
        Send filter
      </button>
    </div>
  );
}

export default NumericFilter;
